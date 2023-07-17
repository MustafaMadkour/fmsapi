import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Ship } from './ship.schema';

export type CertificateDocument = Certificate & Document;

@Schema()
export class Certificate {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  expirationDate: Date;

  @Prop({ required: true })
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ship' })
  ship: Ship;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);