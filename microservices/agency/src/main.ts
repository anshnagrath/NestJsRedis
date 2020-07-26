import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport  } from '@nestjs/microservices';

const logger  = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice( AppModule , {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });

  app.listen(() => logger.log('Agency Service is up...'));
}
bootstrap();
