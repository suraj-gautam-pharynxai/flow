import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Entities, Repositories } from './export';

import { DatabaseModule } from '@app/database/database.module';


@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      ...Entities
    ])],
  providers: [
    ...Repositories
  ],
  exports: [
    ...Repositories
  ],
})
export class RepositoryModule {}
