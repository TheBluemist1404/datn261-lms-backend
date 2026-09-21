import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableShutdownHooks();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const corsOrigin = configService.get<string>('CORS_ORIGIN') ?? 'http://localhost:5173';

  app.enableCors({
    origin: corsOrigin === '*' ? '*' : corsOrigin.split(',').map((origin) => origin.trim()),
  });

  if (configService.get<boolean>('SWAGGER_ENABLED') ?? false) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('NestJS API')
      .setDescription('OpenAPI documentation for the NestJS application.')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document);
  }

  const port = configService.get<number>('PORT') ?? 3000;
  await app.listen(port);
}

void bootstrap();
