import { ApiProperty } from '@nestjs/swagger'
export class Agency{
    @ApiProperty({ type: String ,description:'Unique Agency Name',required :true})
    Name: string;
    @ApiProperty({ type: String ,description:'Agency Address1',required :true})
    Address1: string;
    @ApiProperty({ type: String ,description:'Agency Address2',required :true})
    Address2?: string;
    @ApiProperty({ type: String ,description:'Agency State'})
    State: string;
    @ApiProperty({ type: String ,description:'Agency City Name',required :true})
    City:string;
    @ApiProperty({ type: String ,description:'Agency Number',required :true})
    PhoneNumber:string 
    @ApiProperty({ type: String ,description:'Agency Password',required :true})
    Password:string 
  } 


