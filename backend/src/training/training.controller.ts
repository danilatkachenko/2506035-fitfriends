import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TrainingService } from './training.service';
import { CreateTrainingDto } from './dto/create-training.dto';

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
  async getAll() {
    return this.trainingService.getAllTrainings();
  }
}
