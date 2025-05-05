import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";


export class MeasureDto{
    
    @ApiProperty({example:'gram'})
    @IsNotEmpty()
    name:string;

    @ApiProperty({example:'g.'})
    @IsOptional()
    short_form:string;

    
}