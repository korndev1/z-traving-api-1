import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MeasureDto } from './dto';

@Injectable()
export class IngredientsService {
    constructor(private prisma: PrismaService){}

    async addMeasure(dto: MeasureDto) {
        try {
            const measure = await this.prisma.measure.create({
                data:{
                    name:dto.name,
                    short_forn:dto.short_form
                }
            })

            return {statusCode:200,data: measure}
        } catch (error) {
            return {statusCode:400,data: 'error'}
        }
        
    }

    async getMeasure(){
        try {
            const measure = await this.prisma.measure.findMany()
            return{statusCode:200,data: measure}
        } catch (error) {
            return error
        }
    }
}


