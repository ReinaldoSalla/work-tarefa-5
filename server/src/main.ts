import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from "./properties";
import { route } from "./properties";
import { clientDir } from "./properties";
import { dbUrl } from "./properties";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`Server running. URL: http://${route}`);
  console.log(`MongoDB connected. URL: ${dbUrl}`);
  console.log(`Serving static content: Directory: ${clientDir}`);
}
bootstrap();