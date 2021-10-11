import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeesController } from './controllers/employees.controller';
import { Employees } from './entities/employees.entity';
import { EmployeesService } from './services/employees.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employees])],
    providers:[EmployeesService],
    exports:[EmployeesService],
    controllers:[EmployeesController]
})
export class EmployeesModule {}
