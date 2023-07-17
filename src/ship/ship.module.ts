import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ship, ShipSchema } from '../schemas/ship.schema';
import { ShipController } from './ship.controller';
import { ShipService } from './ship.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Ship.name, schema: ShipSchema }])],
    controllers: [ShipController],
    providers: [ShipService],
})
export class ShipModule {}