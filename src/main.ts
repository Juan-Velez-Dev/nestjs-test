import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //* Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Course Nestjs')
    .setDescription('This is for practice Nestjs')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //* Validation configuration
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
