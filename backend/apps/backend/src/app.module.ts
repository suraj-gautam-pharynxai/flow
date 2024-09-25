import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from '@app/repository';
import { FlowModule } from 'apps/flow/src/flow.module';

@Module({
  imports: [RepositoryModule, FlowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
