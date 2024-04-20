import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorDetailsService } from './doctor-details.service';
import { CreateDoctorDetailDto } from './dto/create-doctor-detail.dto';
import { UpdateDoctorDetailDto } from './dto/update-doctor-detail.dto';

@Controller('doctor-details')
export class DoctorDetailsController {
  constructor(private readonly doctorDetailsService: DoctorDetailsService) {}

  @Post()
  create(@Body() createDoctorDetailDto: CreateDoctorDetailDto) {
    return this.doctorDetailsService.create(createDoctorDetailDto);
  }

  @Get()
  findAll() {
    return this.doctorDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDetailDto: UpdateDoctorDetailDto) {
    return this.doctorDetailsService.update(+id, updateDoctorDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorDetailsService.remove(+id);
  }
}
