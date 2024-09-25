import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('chat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async chat(
    @Body('question') question: string,
    @Body('sessionId') sessionId: string,
  ) {
    // Call a service method or handle the logic here
    const response = await this.appService.processChat(question, sessionId);

    // Return the response
    return {
      success: true,
      sessionId,
      question,
      response,
    };
  }
}
