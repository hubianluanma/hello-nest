import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // abortOnError set to false to prevent Nest from exiting on unhandled promise rejections
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
