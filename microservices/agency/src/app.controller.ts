import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateAgencyAndClient } from './dtos/create-agency-client.dto'

@Controller()
export class AppController {
  private logger =  new Logger('Aggency Service');
  constructor(private readonly appService: AppService) {}
  @MessagePattern( 'Create_Agency_And_Client' )
  async createAggencyAndClient(@Body() data : CreateAgencyAndClient) {
    this.logger.log('Createing Aggency  ' ); 
    return this.appService.createAgencyAndClient(data);
  }
  @MessagePattern('Top_Clients_With_Agencies')
  async fetchAgencyAndClientWithMaxBill(){
    this.logger.log('Fetching  Client And Agency'); 
    return this.appService.fetchClientWithMaxBill();
  }
  @MessagePattern('Fetch_Agency')
  async fetchAgencyById(name:string){
   this.logger.log('Feting Agency By Id');
   return this.appService.fetchAgencyById(name)   
  }
}
