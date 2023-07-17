import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Ship } from './ship.schema';

export type SparePartDocument = SparePart & Document;

@Schema()
export class SparePart {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ship' })
  ship: Ship;
}

export const SparePartSchema = SchemaFactory.createForClass(SparePart);
