import {ApiProperty } from '@nestjs/swagger'
export class UpdateClient{
    @ApiProperty({ type:String , description:'Client Name' , required:false  })
    Name?: number;
    @ApiProperty({ type:String , description:'Client Email' , required:false  })
    Email?: string;
    @ApiProperty({ type:String , description:'Client Phone Number' , required:false  })
    PhoneNumber?: string;
    @ApiProperty({ type:String , description:'Client Total Bill' , required:false  })
    TotalBill?:number;
    @ApiProperty({ type:String , description:'Client Agency Id' , required:true  })
    AgencyId : string 
}