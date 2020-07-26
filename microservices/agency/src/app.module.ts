import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencySchema } from './schemas/agency.schema';
import { config } from 'dotenv' ;
config();
@Module({
  imports: [   MongooseModule.forRoot(process.env.MONGO_URI) ,  MongooseModule.forFeature([{ name: 'Agency', schema: AgencySchema }]) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
