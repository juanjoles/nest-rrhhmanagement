import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from '../entities/employees.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employees)
        private repo: Repository<Employees>,
    ){}

    async saveEmployee(employee:any){
        await this.repo.insert(employee);
        return employee
    }

    async findAll(){
        return await this.repo.find();
    }

    async delete(id:number){
        return await this.repo.delete(id)
    }

    async update (id:number, name:any){
        return await this.repo.update(id,name)
    }

    async findOnEmployee(id:number){
        return await this.repo.findOne(id)
    }
}
