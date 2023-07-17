import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SparePart, SparePartDocument } from '../schemas/spare-part.schema';
import { CreateSparePartDto } from './dto/create-spare-part.dto';
import { UpdateSparePartDto } from './dto/update-spare-part.dto';

@Injectable()
export class SparePartService {
constructor(@InjectModel(SparePart.name) private sparePartModel: Model<SparePartDocument>) {}

async create(createSparePartDto: CreateSparePartDto): Promise<SparePart> {
const createdSparePart = new this.sparePartModel(createSparePartDto);
return createdSparePart.save();
}

async findAll(): Promise<SparePart[]> {
return this.sparePartModel.find().exec();
}

async findOne(id: string): Promise<SparePart> {
return this.sparePartModel.findById(id).exec();
}

async update(id: string, updateSparePartDto: UpdateSparePartDto): Promise<SparePart> {
return this.sparePartModel.findByIdAndUpdate(id, updateSparePartDto, { new: true }).exec();
}

async remove(id: string): Promise<SparePart> {
return this.sparePartModel.findByIdAndRemove(id).exec();
}
}