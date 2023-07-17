import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SparePartService } from './spare-part.service';
import { CreateSparePartDto } from './dto/create-spare-part.dto';
import { UpdateSparePartDto } from './dto/update-spare-part.dto';

@Controller('spare-parts')
export class SparePartController {
constructor(private readonly sparePartService: SparePartService) {}

@Post()
create(@Body() createSparePartDto: CreateSparePartDto) {
return this.sparePartService.create(createSparePartDto);
}

@Get()
findAll() {
return this.sparePartService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
return this.sparePartService.findOne(id);
}

@Put(':id')
update(@Param('id') id: string, @Body() updateSparePartDto: UpdateSparePartDto) {
return this.sparePartService.update(id, updateSparePartDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
return this.sparePartService.remove(id);
}
}