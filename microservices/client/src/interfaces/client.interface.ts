import { Document } from 'mongoose';

  export interface Client extends Document {
    Name: string;
    Email: string;
    PhoneNumber: string;
    TotalBill:number;
    AggencyId: string

}