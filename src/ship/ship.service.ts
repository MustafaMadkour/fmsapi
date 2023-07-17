import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ship, ShipDocument } from '../schemas/ship.schema';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';

@Injectable()
export class ShipService {
  constructor(@InjectModel(Ship.name) private readonly shipModel: Model<ShipDocument>) {}

  async create(createShipDto: CreateShipDto): Promise<Ship> {
    const createdShip = new this.shipModel(createShipDto);
    return createdShip.save();
  }

  async findAll(): Promise<Ship[]> {
    return this.shipModel.find().exec();
  }

  async findOne(id: string): Promise<Ship> {
    return this.shipModel.findById(id).exec();
  }

  async update(id: string, updateShipDto: UpdateShipDto): Promise<Ship> {
    return this.shipModel.findByIdAndUpdate(id, updateShipDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Ship> {
    return this.shipModel.findByIdAndRemove(id).exec();
  }
}