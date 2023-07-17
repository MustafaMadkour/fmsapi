import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SparePartController } from './spare-part.controller';
import { SparePartService } from './spare-part.service';
import { SparePart, SparePartSchema } from '../schemas/spare-part.schema';

@Module({
imports: [MongooseModule.forFeature([{ name: SparePart.name, schema: SparePartSchema }])],
controllers: [SparePartController],
providers: [SparePartService],
})
export class SparePartModule {}