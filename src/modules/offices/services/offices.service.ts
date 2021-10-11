import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offices } from '../entities/offices.entity';

@Injectable()
export class OfficesService {
    constructor(
        @InjectRepository(Offices)
        private repo: Repository<Offices>,
    ){}

    async saveOffice(office:any){
        await this.repo.insert(office);
        return office
    }

    async findAll(){
        return await this.repo.find();
    }

    async delete(id:number){
        return await this.repo.delete(id)
    }

    async update (id:number,name:any){
        return await this.repo.update(id,name)
    }
}
