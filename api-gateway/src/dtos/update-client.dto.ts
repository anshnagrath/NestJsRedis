import {ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty,IsString,IsNumber,IsOptional} from "class-validator";
export class UpdateClient{
    @IsString({always:false})
    @ApiProperty({ type:String , description:'Client Name' , required:false  })
    Name?: string;

    @IsString({always:false})
    @ApiProperty({ type:String , description:'Client Email' , required:false  })
    @IsString()
    Email?: string;


    @IsString({always:false})
    @ApiProperty({ type:String , description:'Client Phone Number' , required:false  })
    PhoneNumber?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ type:String , description:'Client Total Bill' , required:false  })
    TotalBill?:number;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty({ type:String , description:' Agency Id' , required:true  })
    AgencyId : string 

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type:String , description:'Client Id' , required:true  })
    ClientId : string 

}