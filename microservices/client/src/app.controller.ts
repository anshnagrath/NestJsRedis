import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Client } from  './dtos/client.dto';
import { ClientUpdateDTO } from './dtos/client-update.dto'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('Create_Client')
   createClient( @Body() data : Client )  {
    return this.appService.createClient(data);
  }
  @MessagePattern('Update_Client')
   updateClient(@Body() data : ClientUpdateDTO){
     return this.appService.updateClient(data);
   }
   @MessagePattern('Max_TotalBill_Client')
   fetchClientWithMaxTotalBill(){
     return this.appService.fetchClientWithMaxTotalBill();
   }
}
