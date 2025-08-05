import { Controller, Post, Body, UseGuards, Get, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UserEntity } from '../user/user.entity';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
@UseGuards(JwtAuthGuard)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@GetUser() user: UserEntity, @Body() dto: CreateReviewDto) {
    return this.reviewService.create(user, dto);
  }

  @Get()
  findByTrainingId(@Query('trainingId') trainingId: number) {
    return this.reviewService.findByTrainingId(trainingId);
  }
}
