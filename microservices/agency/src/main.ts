import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport  } from '@nestjs/microservices';
import { config } from 'dotenv' ;
config();
const logger  = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice( AppModule , {
    transport: Transport.REDIS,
    options: {
      url:  process.env.REDIS_URI,
    },
  });

  app.listen(() => logger.log('Agency Service is up...'));
}
bootstrap();
