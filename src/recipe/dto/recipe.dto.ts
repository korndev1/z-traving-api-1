import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class IngredientDto {
  @ApiProperty({ example: 'fish sauce' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 500 })
  @IsString()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ example: 'gram' })
  @IsNotEmpty()
  @IsString()
  measure: string;
}

export class CreateDataDto {
  @ApiProperty({ example: 'www.mock-image.com' })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({example:'crispy Pig'})
  @IsNotEmpty()
  @IsString()
  name: string;


  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredient: IngredientDto[];


  @ApiProperty({example:4})
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @ApiProperty({example:'1'})
  @IsNotEmpty()
  @IsString()
  idUser: string;

  @ApiProperty({example:'Admin'})
  @IsNotEmpty()
  @IsString()
  nameUser: string;

  @IsDateString()
  updateAt: string;

  @IsDateString()
  createAt: string;
}
