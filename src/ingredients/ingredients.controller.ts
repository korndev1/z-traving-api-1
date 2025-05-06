import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MeasureDto } from './dto';

@ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientService: IngredientsService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add-measure')
  @ApiBody({ type: MeasureDto })
  addMeasure(@Body() dto: MeasureDto) {
    return this.ingredientService.addMeasure(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('measure')
  getMeasure() {
    return this.ingredientService.getMeasure();
  }

  @HttpCode(HttpStatus.OK)
  @Delete('/delMeasure/:id')
  async deleteMeasure(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.ingredientService.deleteMeasure(numericId);
  }

  @HttpCode(HttpStatus.OK)
  @Put('/updateMeasure/:id')
  async updateMeasure(@Param('id') id: string, @Body() dto:MeasureDto) {
    const numericId = parseInt(id, 10);
    return this.ingredientService.updateeMeasure(numericId,dto);
  }
}
