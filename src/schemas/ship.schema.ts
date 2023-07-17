import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Certificate } from 'crypto';
import mongoose, { Document } from 'mongoose';
import { Crew } from './crew.schema';
import { SparePart } from './spare-part.schema';

export type ShipDocument = Ship & Document;


@Schema()
export class Ship {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  capacity: number;

  @Prop({ required: true })
  buildDate: Date;

  @Prop({ required: true })
  imoNumber: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' })
  certificates: Certificate[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Crew' })
  crew: Crew[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SparePart' })
  spareParts: SparePart[];
}

export const ShipSchema = SchemaFactory.createForClass(Ship);
