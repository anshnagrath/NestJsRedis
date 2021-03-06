import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv'
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  config()
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Assignment')
  .setDescription('Asynchronous Microservice Architecture Using Redis')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
bootstrap();
