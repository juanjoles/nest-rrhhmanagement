import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/db.config';
//import { config } from 'process';
import { EmployeesModule } from './modules/employees/employees.module';
import { EmployeesController } from './modules/employees/controllers/employees.controller';
import { OfficesModule } from './modules/offices/offices.module';
import { OfficesService } from './modules/offices/services/offices.service';
import { OfficesController } from './modules/offices/controllers/offices.controller';
import config from './config/config'

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    load:[config],
    envFilePath:['.env'],
  }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass: DatabaseConfig,
    }),
    EmployeesModule,
    OfficesModule],
  controllers: [AppController, EmployeesController, OfficesController],
  providers: [AppService],
})
export class AppModule {}
