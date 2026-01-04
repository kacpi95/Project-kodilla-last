import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './shared/interceptor/logger.interceptor';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  });

  const clientPath = join(process.cwd(), 'client');

  app.use(express.static(clientPath));
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }

    res.sendFile(join(clientPath, 'index.html'));
  });

  await app.enableShutdownHooks();
  await app.listen(8000);

  console.log('🚀 Server running on http://localhost:8000');
}
bootstrap();
