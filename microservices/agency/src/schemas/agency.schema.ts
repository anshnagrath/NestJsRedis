
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Schema as MongooseSchema  } from 'mongoose';

@Schema()
export class Agency extends Document {
  @Prop({ required: true , unique:true })
  Name: string;

  @Prop({ required: true })
  Address1: string;

  @Prop()
  Address2: string;

  @Prop({ required: true })
  State: string;

  @Prop({ required: true })
  City:string;

  @Prop({ required: true })
  PhoneNumber:string

  @Prop({ required: true })
  Password:string

}

export const AgencySchema = SchemaFactory.createForClass(Agency);