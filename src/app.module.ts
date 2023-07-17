import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ShipModule } from './ship/ship.module';
import { CertificateModule } from './certificate/certificate.module';
import { CrewModule } from './crew/crew.module';
import { SparePartModule } from './spare-part/spare-part.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    ShipModule,
    CertificateModule,
    CrewModule,
    SparePartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
