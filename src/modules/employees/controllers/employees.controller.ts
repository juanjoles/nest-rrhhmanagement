import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { get } from 'http';
import { CreateEmployees } from '../dto/create-employees';
import { UpdateEmployees } from '../dto/update-employees';
import { EmployeesService } from '../services/employees.service';

@Controller('employees')
export class EmployeesController {
    constructor (private employeeService:EmployeesService){}

    @Get()
    getEmployee():any{
        return this.employeeService.findAll();
    }

    @Post()
    addEmployee(@Body() employeeadd:CreateEmployees):any{
        return this.employeeService.saveEmployee(employeeadd);
    }

    @Put(':id')
    updateEmployee(@Body() data:UpdateEmployees, @Param() params:any){
        return this.employeeService.update(params.id,data)
    }

    @Delete(':id')
    getOneEmployee(@Param() params):any{
        return this.employeeService.delete(params.id)
    }

}
