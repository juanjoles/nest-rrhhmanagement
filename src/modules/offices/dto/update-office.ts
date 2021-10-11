import { IsString } from "class-validator";

export class UpdateOffice {
    @IsString()
    name:string;
}
