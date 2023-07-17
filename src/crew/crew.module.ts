import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Crew, CrewSchema } from 'src/schemas/crew.schema';
import { CrewController } from './crew.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Crew.name, schema: CrewSchema }])],
  controllers: [CrewController],
  providers: [CrewService]
})
export class CrewModule {}
