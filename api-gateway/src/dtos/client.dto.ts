import { ApiProperty } from '@nestjs/swagger'
  export class Client {
    @ApiProperty({ type:String ,description:'Client Name',required :true})
    Name: string;
    @ApiProperty({ type:String ,description:'Client Email',required :true})
    Email: string;
    @ApiProperty({ type:String ,description:'Client Phone Number ',required :true})
    PhoneNumber: string;
    @ApiProperty({ type:String ,description:'Client Total Number',required :true})
    TotalBill:number
}