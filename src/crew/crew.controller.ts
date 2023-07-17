import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';

@Controller('crews')
export class CrewController {
  constructor(private readonly crewsService: CrewService) {}

  @Post()
  create(@Body() createCrewDto: CreateCrewDto) {
    return this.crewsService.create(createCrewDto);
  }

  @Get()
  findAll() {
    return this.crewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crewsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCrewDto: UpdateCrewDto) {
    return this.crewsService.update(id, updateCrewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crewsService.remove(id);
  }
}
