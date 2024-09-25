import { NestFactory } from '@nestjs/core';
import { FlowModule } from './flow.module';

async function bootstrap() {
  const app = await NestFactory.create(FlowModule);
  await app.listen(3000);
}
bootstrap();
