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
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTraining(
    @Param('id', ParseIntPipe) id: number,
    @Req() req,
    @Body() dto: UpdateTrainingDto,
  ) {
    const updated = await this.trainingService.updateTraining(
      id,
      req.user.id,
      dto,
    );

    const { password, ...safeCoach } = updated.coach;
    const { coach, ...rest } = updated;

    return {
      ...rest,
      coach: safeCoach,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async getTrainings(
    @Query('duration') duration?: number,
    @Query('price') price?: number,
    @Query('calories') calories?: number,
    @Query('search') search?: string,
    @Query('sortBy') sortBy: 'price' | 'duration' | 'calories' = 'price',
    @Query('order') order: 'asc' | 'desc' = 'asc',
    @Query('limit') limit = 10,
    @Query('page') page = 1,
  ) {
    return this.trainingService.findTrainings({
      duration,
      price,
      calories,
      search,
      sortBy,
      order,
      limit: Number(limit),
      page: Number(page),
    });
  }
}
