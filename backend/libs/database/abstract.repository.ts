import { Logger, NotFoundException } from '@nestjs/common';
import {
  FilterQuery,
  Model,
  Types,
  UpdateQuery,
  SaveOptions,
  Connection,
  PipelineStage,
  AggregateOptions,
} from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(
    protected readonly model: Model<TDocument>,
    private readonly connection: Connection,
  ) {}

  async create(
    document: Omit<TDocument, '_id'>,
    options?: SaveOptions,
  ): Promise<TDocument> {
    console.log('document', document);
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    // return (await createdDocument.save()).toJSON() as unknown as TDocument;
    return await createdDocument.save();
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery, {}, { lean: true });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }

    return document as TDocument;
  }

  async findMany(): Promise<any> {
    const document = await this.model.find();

    if (!document) {
      this.logger.warn('Document not found with filterQuery');
      throw new NotFoundException('Document not found.');
    }

    return document;
  }

  async hasOne(filterQuery: FilterQuery<TDocument>): Promise<Boolean> {
    const document = await this.model.findOne(filterQuery, {}, { lean: true });
    if (!document) {
      return false;
    }
    return true;
  }

  async findOneAndUpdate(
filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument>, p0: { strict: boolean; upsert: boolean; },
  ) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
      upsert: true,
    });

    if (!document) {
      this.logger.warn(`Document not found with filterQuery:`, filterQuery);
      throw new NotFoundException('Document not found.');
    }

    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {}, { lean: true });
  }

  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    return session;
  }

  async aggregate(pipeline: PipelineStage[], options: AggregateOptions) {
    return this.model.aggregate(pipeline);
  }

  async deleteOne(filterQuery: FilterQuery<TDocument>) {
    return this.model.deleteOne(filterQuery);
  }
}
