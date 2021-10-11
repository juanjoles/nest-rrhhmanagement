import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OfficesController } from './controllers/offices.controller';
import { Offices } from './entities/offices.entity';
import { OfficesService } from './services/offices.service';

@Module({
    imports:[TypeOrmModule.forFeature([Offices])],
    providers:[OfficesService],
    exports:[OfficesService],
    controllers:[OfficesController]
})
export class OfficesModule {}
