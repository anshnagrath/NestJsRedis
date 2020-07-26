import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './schemas/client.schema'; 
import { config } from 'dotenv' ;
config();
@Module({
  imports: [   MongooseModule.forRoot(process.env.MONGO_URI) ,  MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
