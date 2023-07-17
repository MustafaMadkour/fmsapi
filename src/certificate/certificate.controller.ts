import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';

@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificatesService: CertificateService) {}

  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.create(createCertificateDto);
  }

  @Get()
  findAll() {
    return this.certificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCertificateDto: UpdateCertificateDto) {
    return this.certificatesService.update(id, updateCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(id);
  }
}