import { Module } from '@nestjs/common';
import { DocAppointmentService } from './doc-appointment.service';
import { DocAppointmentController } from './doc-appointment.controller';

@Module({
  controllers: [DocAppointmentController],
  providers: [DocAppointmentService],
})
export class DocAppointmentModule {}
