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

  @UseGuards(JwtAuthGuard)
  @Get('my')
  async getMyTrainings(
    @Req() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sort') sort = 'createdAt',
    @Query('order') order: 'ASC' | 'DESC' = 'DESC',
  ) {
    const coachId = req.user.id;

    const parsedPage = parseInt(page ?? '1', 10);
    const parsedLimit = parseInt(limit ?? '10', 10);

    return this.trainingService.getAll({
      page: parsedPage,
      limit: parsedLimit,
      sort,
      order,
      coachId,
    });
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
    @Req() req,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('sort') sortBy?: 'price' | 'duration',
    @Query('order') order?: 'ASC' | 'DESC',
  ) {
    return this.trainingService.getAllPaginated(req.user.id, req.user.role, {
      page,
      limit,
      sortBy,
      order,
    });
  }
}
