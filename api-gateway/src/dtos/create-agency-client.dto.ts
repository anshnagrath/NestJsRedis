import { Agency } from './agency.dto';
import { Client } from './client.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested,IsNotEmpty,IsString } from 'class-validator';
import { Type } from 'class-transformer';


 

export class CreateAgencyAndClientDTO {
  
    @ApiProperty({ type: Agency ,description:'Agency Object',required :true})
    @ValidateNested()
    @Type(() => Agency)
    Agency: Agency 



    @ApiProperty({ type: Client ,description:'Client Object',required :true})
    @ValidateNested()
    @Type(() => Client)
    Client: Client

  }

 


