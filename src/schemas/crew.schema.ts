import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Ship } from './ship.schema';
import { Certificate } from './certificate.schema';

export type CrewDocument = Crew & Document;

@Schema()
export class Crew {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' }] })
  certificates: Certificate[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ship' })
  ship: Ship;
}

export const CrewSchema = SchemaFactory.createForClass(Crew);
