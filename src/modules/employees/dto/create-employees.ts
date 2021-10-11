import { IsNumber, IsString } from "class-validator";

export class CreateEmployees {
    @IsString()
    name:string;

    @IsString()
    lastname:string;

    @IsString()
    direction:string;

    @IsNumber()
    idOffice:number;
}
