import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencySchema } from './schemas/agency.schema' 
@Module({
  imports: [   MongooseModule.forRoot('mongodb://localhost:27017/agency') ,  MongooseModule.forFeature([{ name: 'Agency', schema: AgencySchema }]) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
