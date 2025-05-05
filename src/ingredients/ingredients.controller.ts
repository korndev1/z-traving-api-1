import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MeasureDto } from './dto';

@ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController {
    constructor(private ingredientService: IngredientsService){}

    @HttpCode(HttpStatus.OK)
    @Post('add-measure')
    @ApiBody({type:MeasureDto})
    addMeasure(@Body() dto:MeasureDto){
        return this.ingredientService.addMeasure(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Get('measure')
    getMeasure(){
        return this.ingredientService.getMeasure()
    }
}
