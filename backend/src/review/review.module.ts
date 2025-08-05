import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TrainingEntity } from '../training/entities/training.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity, TrainingEntity])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
