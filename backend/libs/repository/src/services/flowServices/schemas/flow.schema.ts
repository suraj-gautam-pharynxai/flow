import { AbstractDocument } from '@app/database/abstract.schema';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Flow extends AbstractDocument {
  @Prop({ required: true })
  recharge_id: string;

  @Prop({ required: true })
  payment_id: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  recharge_amount: number;

  @Prop({ required: true })
  credits_added: number;

  @Prop({ required: true })
  initial_credit_balance: number;

  @Prop({ required: true })
  final_credit_balance: number;
}

export const FlowSchema = SchemaFactory.createForClass(Flow);
