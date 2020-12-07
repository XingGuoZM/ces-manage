import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.enableCors();
  await app.listen(3000);
  console.log('app is listening on 3000!')
}
bootstrap();
