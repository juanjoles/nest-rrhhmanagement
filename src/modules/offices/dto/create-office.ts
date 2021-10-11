import { IsString } from "class-validator";

export class CreateOffice {
    @IsString()
    name:string;
}
