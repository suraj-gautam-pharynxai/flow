import { Injectable, Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '@app/database/abstract.repository';

import { Flow } from '../schemas/flow.schema';

@Injectable()
export class BillingUserRepository extends AbstractRepository<Flow> {
  protected readonly logger = new Logger(BillingUserRepository.name);

  constructor(
    @InjectModel(Flow.name) flowModel: Model<Flow>,
    @InjectConnection() connection: Connection,
  ) {
    super(flowModel, connection);
  }
}
