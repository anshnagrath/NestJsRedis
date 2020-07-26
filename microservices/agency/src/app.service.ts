import { Injectable  ,Logger } from '@nestjs/common';
import { CreateAgencyAndClient } from './dtos/create-agency-client.dto';
import { Client ,ClientResponse } from './dtos/client.dto';
import { Agency }   from './interfaces/agency.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { hashSync } from 'bcrypt';
import { config } from 'dotenv' ;
config();

@Injectable()
export class AppService {
  private logger =  new Logger('Aggency Service');
  clientProxy : ClientProxy;
  constructor(@InjectModel( 'Agency' ) private agencyModel: Model<Agency> ) {
   this.clientProxy = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: process.env.REDIS_URI,
      },
    });

  }
  public async createAgencyAndClient(data: CreateAgencyAndClient) {
    try{
      let { Client , Agency } = data;
      Agency.Password = hashSync(Agency.Password,5);
 
      let createAggency =  new this.agencyModel(Agency);
      let newAggency  =   await createAggency.save();
      if( newAggency  && newAggency._id ){
      let newClient = { ...Client , 'AgencyId' : newAggency._id.toString() };
      let createClient  = await this.clientProxy.send< ClientResponse ,Client>('Create_Client' , newClient).toPromise();
    
      if(createClient && createClient.statusCode == 201){
        return { statusCode:201 , message:'ok' , data: { 'AgencyId':  newAggency._id , 'ClientId':  createClient.data   }};
      }else{
          //delete agency if client service is down or throws an error
          let  RemoveAgency =  await this.agencyModel.findByIdAndRemove({ _id : newAggency._id });
          this.logger.log('Error While Creating Client');
          return { statusCode:500 , message:'internal server error', data : '' };
      }  
      }else{
        this.logger.error('Error While Creating Agency');
        return { statusCode:500 , message:'internal server error', data : '' };
      }
    }catch(e){
      this.logger.error(e)
      return { statusCode:500 , message:'internal server error', data : '' };
    }

  }

 public async fetchClientWithMaxBill(){
    try{
      let clientWithMaxBill = await this.clientProxy.send<ClientResponse,string>('Max_TotalBill_Client' , '').toPromise();
      if(clientWithMaxBill){
       let clientAgency =  await this.agencyModel.findById(clientWithMaxBill.data.AgencyId,{password:0,_id:0});
       if(clientAgency){
        return { statusCode:200 , message:'ok', data : { Client: clientWithMaxBill , Agency: clientAgency } };
       } else{
        this.logger.log('Error fetching agency');
        return { statusCode:500 , message:'internal server error', data : '' };
       }

      }else{
        this.logger.error('Error fetching client');
        return { statusCode:500 , message:'internal server error', data : '' };
      }

    }catch(e){
      this.logger.error(e)
      return { statusCode:500 , message:'internal server error', data : '' };
    }
 }

 public async fetchAgencyById(name){
   try{
      let agency = await this.agencyModel.findOne({Name:name});
      if(agency){
        return {status : 200 , message: 'ok' , data: agency };
      }else{
        this.logger.log('Error fetching client');
        return { statusCode:500 , message:'internal server error', data : '' };
      }

   }catch(e){

   }
 }

}
