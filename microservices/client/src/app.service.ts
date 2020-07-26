import { Injectable,Logger } from '@nestjs/common';
import { Client} from './dtos/client.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'; 
import { Client as ClientInterface } from './interfaces/client.interface';
import { ClientUpdateDTO  } from './dtos/client-update.dto'

@Injectable()
export class AppService {
  private logger =  new Logger('Client Service');
  constructor(@InjectModel( 'Client' ) private clientModel: Model<ClientInterface> ){  }
  async createClient( data : Client)  {
    try{
    let newClient = new this.clientModel(data);
    let savedClient = await newClient.save()  ;
     if(savedClient && savedClient._id){
       this.logger.log('Created New Client');
        return { statusCode: 201 , message: 'ok' , data: savedClient._id  }
     }else{
       return { statusCode: 500 , message:'Internal Server Error' , data : ''}
     }
  }catch(e){
      this.logger.log('Error While Creating Client : ',e)
  }
}

async updateClient(data : ClientUpdateDTO) {

try{  
  let ClientId = data.ClientId ;
  let updatedClient = await this.clientModel.findByIdAndUpdate( ClientId ,{ $set : data } ,{ new : true});
  if(updatedClient){
    this.logger.log(' Client  Information Updated :::');
    return {'statusCode' : 200 , message:'ok' , data : updatedClient }
  }else{
    this.logger.log(' Client  Not Found :::');
    return { 'statusCode':404 ,message:'Not Found' , data: ''}
  }
}catch(e){
  this.logger.log('Error Occured While Updating The Client');
  return {  'statusCode':500 ,message:'Internal Server Error' , data: '' }
}

}

async fetchClientWithMaxTotalBill(){
  try{
    let maxBilledClient = await this.clientModel.find({},{_id:0}).sort({TotalBill:-1}).limit(1);
    if(maxBilledClient){
        this.logger.log('Fetched Client With Maximum Bill');
        return { statusCode: 200 , message: 'ok' , data: maxBilledClient[0] };
    }else{
      return { statusCode: 500 , message:'Internal Server Error' , data : ''};
    }

  }catch(e){

  }
}
}
