import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certificate, CertificateDocument } from '../schemas/certificate.schema';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';

@Injectable()
export class CertificateService {
  constructor(@InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>) {}

  async create(createCertificateDto: CreateCertificateDto): Promise<Certificate> {
    const createdCertificate = new this.certificateModel(createCertificateDto);
    return createdCertificate.save();
  }

  async findAll(): Promise<Certificate[]> {
    return this.certificateModel.find().exec();
  }

  async findOne(id: string): Promise<Certificate> {
    return this.certificateModel.findById(id).exec();
  }

  async update(id: string, updateCertificateDto: UpdateCertificateDto): Promise<Certificate> {
    return this.certificateModel.findByIdAndUpdate(id, updateCertificateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Certificate> {
    return this.certificateModel.findByIdAndRemove(id).exec();
  }
}