import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowService {
  getHello(): string {
    return 'Hello World!';
  }
}
