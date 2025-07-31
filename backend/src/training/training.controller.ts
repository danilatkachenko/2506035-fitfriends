import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Query,
  Param,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TrainingService } from './training.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Controller('trainings')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Req() req, @Body() dto: CreateTrainingDto) {
    const userId = req.user.id;
    return this.trainingService.createTraining(userId, dto);
  }
  @Get()
  async getAll(
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('sort') sort?: 'price' | 'duration',
  ) {
    return this.trainingService.getAll({ minPrice, maxPrice, sort });
  }
  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.trainingService.getById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTrainingDto,
    @Req() req,
  ) {
    const updated = await this.trainingService.update(id, req.user.id, dto);
    return updated;
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    await this.trainingService.delete(id, req.user.id);
    return { message: 'Удалено' };
  }
}
