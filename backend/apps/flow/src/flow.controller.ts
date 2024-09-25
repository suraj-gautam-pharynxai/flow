import { Controller, Post, Body } from '@nestjs/common';
import { FlowService } from './flow.service';

@Controller()
export class FlowController {
  constructor(private readonly flowService: FlowService) {}

  @Post()
  async chat(
    @Body('question') question: string,
    @Body('sessionId') sessionId: string,
  ) {
    // Call a service method or handle the logic here
    const response = await this.flowService.processChat(question, sessionId);

    // Return the response
    return {
      success: true,
      sessionId,
      question,
      response,
    };
  }
}
