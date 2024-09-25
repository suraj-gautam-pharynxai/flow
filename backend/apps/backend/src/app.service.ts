import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import validator from 'validator';
@Injectable()
export class AppService {
  private flows: any;
  private sessionsFolder: string;

  constructor() {
    // Load flow data from JSON file
    const flowPath = path.join(__dirname, '../src/flowData.json');
    const flowData = fs.readFileSync(flowPath, 'utf8');
    this.flows = JSON.parse(flowData);
  }

  private readonly session = {
    // session_id: '',
    flowExecution: true,
    // flowId: '123',
    stepId: 0,
    data: {
      '123': {},
    },
  };

  async processChat(question: string, sessionId: string) {
    const flows = this.flows.flows.healthcareAppointment;
    console.log();

    console.log(this.session);
    if (flows.steps[this.session.stepId].variable) {
      const val = this.dataValidation(
        question,
        flows.steps[this.session.stepId].input.type,
      );
      if (!val) {
        return {
          data: this.session,
          reply: `Please enter correct value of ${flows.steps[this.session.stepId].variable}`,
          nestStep: this.session.stepId + 1,
        };
      }
      this.session.data['123'][flows.steps[this.session.stepId].variable] =
        question;
    }
    this.session.stepId = this.session.stepId + 1;
    return {
      data: this.session,
      reply: [
        {
          BotQuery: flows.steps[this.session.stepId].prompt,
          input: flows.steps[this.session.stepId].input,
        },
      ],
      nestStep: this.session.stepId + 1,
    };
  }

  dataValidation(data, type) {
    console.log(data, type);

    switch (type) {
      case 'string':
      case 'list':
        return validator.isAlpha(data);

      case 'enum': {
        if (validator.isAlpha(data)) {
          if ((data = 'yes')) {
            console.log('data recorded successfully');
          } else {
            console.log('booking could not be completed');
          }
          return validator.isAlpha(data);
        }
      }
      case 'email':
        return validator.isEmail(data);
      default:
        console.log(`please enter a valid input`);
    }
  }
}
