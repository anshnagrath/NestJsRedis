import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty,IsString,IsNumber} from "class-validator";
  export class Client {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type:String ,description:'Client Name',required :true})
    Name: string;


    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type:String ,description:'Client Email',required :true})
    Email: string;


    @IsString({message:'Phone number is a required field'})
    @IsNotEmpty({message:'Phone number is a required field'})
    @ApiProperty({ type:String ,description:'Client Phone Number ',required :true})
    PhoneNumber: string;


    @IsNumber()
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ type:Number ,description:'Client Total Number',required :true})
    TotalBill:number
}