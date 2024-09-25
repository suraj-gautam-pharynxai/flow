import { Module } from '@nestjs/common';
import { FlowController } from './flow.controller';
import { FlowService } from './flow.service';

@Module({
  imports: [],
  controllers: [FlowController],
  providers: [FlowService],
})
export class FlowModule {}
