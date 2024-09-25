import { Test, TestingModule } from '@nestjs/testing';
import { FlowController } from './flow.controller';
import { FlowService } from './flow.service';

describe('FlowController', () => {
  let flowController: FlowController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlowController],
      providers: [FlowService],
    }).compile();

    flowController = app.get<FlowController>(FlowController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(flowController.getHello()).toBe('Hello World!');
    });
  });
});
