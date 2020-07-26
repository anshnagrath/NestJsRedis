import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { CreateAgencyAndClientDTO } from './dtos/create-agency-client.dto'
import { UpdateClient } from './dtos/update-client.dto'
import { ResponseObject as IResponse } from './interfaces/response.interface';
import { Agency } from './dtos/agency.dto';
import { AuthService } from './auth/services/auth.service';
@Injectable()
export class TransportService {
  private client: ClientProxy;

  constructor(private authService : AuthService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  public async createAgencyAndClient( data : CreateAgencyAndClientDTO ) {
    let AgencyAndClient = await this.client.send<IResponse,CreateAgencyAndClientDTO>('Create_Agency_And_Client', data).toPromise();
    let  Token = await this.authService.generateJWT(AgencyAndClient.data.AgencyId);
    if(Token){
        AgencyAndClient.data['Token'] = 'Bearer ' + Token;
        return AgencyAndClient;
    }else{
        throw Error('Unable To Generate Token')
    }
  }
  public updateClient( data  : UpdateClient){
    return this.client.send<IResponse,UpdateClient>('Update_Client', data).toPromise();
  }
  public topClientsWithAgencies( ){
    return this.client.send<IResponse,string>('Top_Clients_With_Agencies','').toPromise();
  }
  public findByPayload (name:string){
    return this.client.send<IResponse,string>('Fetch_Agency',name).toPromise();
  }

}
