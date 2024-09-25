import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document} from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
}
