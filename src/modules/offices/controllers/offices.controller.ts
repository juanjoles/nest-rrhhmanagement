import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOffice } from '../dto/create-office';
import { UpdateOffice } from '../dto/update-office';
import { OfficesService } from '../services/offices.service';

@Controller('offices')
export class OfficesController {
    constructor (private officeService:OfficesService){}

    @Get()
    getOffice():any{
        return this.officeService.findAll();
    }

    @Post()
    addOffice(@Body() officeadd:CreateOffice):any{
        return this.officeService.saveOffice(officeadd)
    }

    @Delete(':id')
    getOneOffice(@Param() params):any{
        return this.officeService.delete(params.id)
    }

    @Put(':id')
    updateOffice(@Body() data:UpdateOffice, @Param() params:any){
        return this.officeService.update(params.id,data)
    }
}
