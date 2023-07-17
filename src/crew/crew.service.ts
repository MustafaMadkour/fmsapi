import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crew, CrewDocument } from '../schemas/crew.schema';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';

@Injectable()
export class CrewService {
  constructor(@InjectModel(Crew.name) private crewModel: Model<CrewDocument>) {}

  async create(createCrewDto: CreateCrewDto): Promise<Crew> {
    const createdCrew = new this.crewModel(createCrewDto);
    return createdCrew.save();
  }

  async findAll(): Promise<Crew[]> {
    return this.crewModel.find().exec();
  }

  async findOne(id: string): Promise<Crew> {
    return this.crewModel.findById(id).exec();
  }

  async update(id: string, updateCrewDto: UpdateCrewDto): Promise<Crew> {
    return this.crewModel.findByIdAndUpdate(id, updateCrewDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Crew> {
    return this.crewModel.findByIdAndRemove(id).exec();
  }
}
