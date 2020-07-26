import { Document } from 'mongoose';

export interface Agency extends Document {
    Name: string;
    Address1: string;
    Address2?: string;
    State: string;
    City:string;
    PhoneNumber:String 
}