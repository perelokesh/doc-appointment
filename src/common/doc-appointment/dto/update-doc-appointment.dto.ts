import { PartialType } from '@nestjs/mapped-types';
import { CreateDocAppointmentDto } from './create-doc-appointment.dto';

export class UpdateDocAppointmentDto extends PartialType(CreateDocAppointmentDto) {}
