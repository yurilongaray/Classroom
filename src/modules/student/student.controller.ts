import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import students from '../../temp-database/students';
import { Student } from './student.entity';

@Controller('v1/students')
export class StudentController {

    @Get()
    public getAll(): Student[] {

        return students;
    }

    @Get(':id')
    public getOne(@Param('id', ParseIntPipe) id: number) {

        return students.find(student => student.id === id);
    }

    @Post()
    public create(@Body() student: Student) {

        return student;
    }
}