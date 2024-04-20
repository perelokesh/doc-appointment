import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocAppointmentService } from './doc-appointment.service';
import { CreateDocAppointmentDto } from './dto/create-doc-appointment.dto';
import { UpdateDocAppointmentDto } from './dto/update-doc-appointment.dto';

@Controller('doc-appointment')
export class DocAppointmentController {
  constructor(private readonly docAppointmentService: DocAppointmentService) {}

  @Post()
  create(@Body() createDocAppointmentDto: CreateDocAppointmentDto) {
    return this.docAppointmentService.create(createDocAppointmentDto);
  }

  @Get()
  findAll() {
    return this.docAppointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docAppointmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocAppointmentDto: UpdateDocAppointmentDto) {
    return this.docAppointmentService.update(+id, updateDocAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docAppointmentService.remove(+id);
  }
}
