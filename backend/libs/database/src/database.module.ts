import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: 'mongodb+srv://surajpharynxai:AsaMRLmLcTGJqS90@cluster0.a1jvz.mongodb.net/flow_db?retryWrites=true&w=majority&appName=Cluster0',
        // configService.get<string>('NODE_ENV') === 'test'
        //   ? configService.get<string>('MONGO_TEST_CONNECTION_URI')
        //   : configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
