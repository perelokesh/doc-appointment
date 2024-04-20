import { Injectable } from '@nestjs/common';
import { CreateDocAppointmentDto } from './dto/create-doc-appointment.dto';
import { UpdateDocAppointmentDto } from './dto/update-doc-appointment.dto';

@Injectable()
export class DocAppointmentService {
  create(createDocAppointmentDto: CreateDocAppointmentDto) {
    return 'This action adds a new docAppointment';
  }

  findAll() {
    return `This action returns all docAppointment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docAppointment`;
  }

  update(id: number, updateDocAppointmentDto: UpdateDocAppointmentDto) {
    return `This action updates a #${id} docAppointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} docAppointment`;
  }
}
