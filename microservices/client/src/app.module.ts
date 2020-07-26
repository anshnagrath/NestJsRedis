import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './schemas/client.schema'; 

@Module({
  imports: [   MongooseModule.forRoot('mongodb://localhost:27017/clients') ,  MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
