import { Controller, Get } from '@nestjs/common';
import { FlowService } from './flow.service';

@Controller()
export class FlowController {
  constructor(private readonly flowService: FlowService) {}

  @Get()
  getHello(): string {
    return this.flowService.getHello();
  }
}
