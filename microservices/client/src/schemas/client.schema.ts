
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Client extends Document {

  @Prop({ required: true })
  Name: string;

  @Prop({ required : true})
  Email: string;

  @Prop({ required: true })
  PhoneNumber: string;

  @Prop({ required: true })
  TotalBill:number;

  @Prop({ required: true })
  AgencyId : MongooseSchema.Types.ObjectId;



}

export const ClientSchema = SchemaFactory.createForClass(Client);