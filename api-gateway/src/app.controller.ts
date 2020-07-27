import { Controller, Post , Put , Get, Logger ,Body ,Res,UseGuards, UsePipes, ValidationPipe  } from '@nestjs/common';
import { TransportService } from './transport.service';
import { CreateAgencyAndClientDTO } from './dtos/create-agency-client.dto'
import { UpdateClient } from './dtos/update-client.dto'
import { Response } from 'express';
import { AuthGuard as Guard } from './auth/guards/auth.guard'
import { ApiCreatedResponse,ApiInternalServerErrorResponse, ApiBody ,ApiTags ,ApiBearerAuth } from "@nestjs/swagger";
import { Response as Resp} from './common/response-obj'
@Controller()
export class AppController {
  private logger =  new Logger('Api-Gate');
  constructor(private readonly transportService: TransportService) {}


  @Post('createAgencyAndClient')
  @ApiTags('Create Agency And Client')
  @ApiCreatedResponse({ description:'ok' })
  @ApiInternalServerErrorResponse({ description:'Internal Server Error' })
  @ApiBody({ type : CreateAgencyAndClientDTO})
  @UsePipes(ValidationPipe)
  async createAgencyAndClient(@Body() data : CreateAgencyAndClientDTO , @Res() res : Response ) {
    this.logger.log('Creating Agency And Client ' );
    let serverRes =  await this.transportService.createAgencyAndClient(data);
    let resObj = new Resp(serverRes,res)
    resObj.send();
  } 

  @Put('updateClient')
  @UseGuards(Guard)
  @ApiBearerAuth()
  @ApiTags('Update Client')
  @ApiCreatedResponse({ description:'ok' })
  @ApiBody({ type : UpdateClient})
  @UsePipes(ValidationPipe)
  @ApiInternalServerErrorResponse({ description:'Internal Server Error' })
  async updateClient(@Body() data : UpdateClient , @Res() res : Response ) {
    this.logger.log('Updating Client');
    let serverRes =  await  this.transportService.updateClient( data );
    let resObj = new Resp(serverRes,res)
     resObj.send();
  }


  
  @Get('getTopClients')
  @UseGuards( Guard)
  @ApiBearerAuth()
  @ApiTags('Fetch Clients And Agency With Maximum BillStatus')
  @ApiCreatedResponse({ description:'ok' })
  @ApiInternalServerErrorResponse({ description:'Internal Server Error' })
  async gettopClientsWithAgencies( @Res() res : Response ) {
    this.logger.log('Fetching Top Clients With Agencies :' );
    let serverRes =  await this.transportService.topClientsWithAgencies();
    let resObj = new Resp(serverRes,res)
    resObj.send();
  }
}
