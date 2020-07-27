import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty,IsString} from "class-validator";
export class Agency{

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Unique Agency Name',required :true}) 
    Name: string;


    @IsString() 
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Agency Address1',required :true})
    Address1: string;



    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Agency Address2',required :true})
    Address2?: string;



    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Agency State'})
    State: string;



    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Agency City Name',required :true})
    City:string;


    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Agency Number',required :true})
    PhoneNumber:string 


    @IsString() 
    @IsNotEmpty()
    @ApiProperty({ type: String ,description:'Agency Password',required :true})
    Password:string 
  } 


