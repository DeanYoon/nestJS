import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //옳지 않은 데이터는 validator 에 도달하지도 못하게
      forbidNonWhitelisted: true, //request 자체를 막아버리게
      transform: true, //url 에서 받은 id 를 number 로 자동 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
