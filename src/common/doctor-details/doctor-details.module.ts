import { Module } from '@nestjs/common';
import { DoctorDetailsService } from './doctor-details.service';
import { DoctorDetailsController } from './doctor-details.controller';

@Module({
  controllers: [DoctorDetailsController],
  providers: [DoctorDetailsService],
})
export class DoctorDetailsModule {}
