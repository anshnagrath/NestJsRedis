import { Agency } from './agency.dto';
import { Client } from './client.dto';
import { ApiProperty } from '@nestjs/swagger'
export class CreateAgencyAndClientDTO {
    @ApiProperty({ type: Agency ,description:'Agency Object',required :true})
    Agency: Agency 
    @ApiProperty({ type: Client ,description:'Client Object',required :true})
    Client: Client

  }

 


