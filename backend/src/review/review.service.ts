import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewEntity } from './entities/review.entity';
import { UserEntity } from '../user/user.entity';
import { TrainingEntity } from '../training/entities/training.entity';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
    @InjectRepository(TrainingEntity)
    private readonly trainingRepository: Repository<TrainingEntity>,
  ) {}

  async create(user: UserEntity, dto: CreateReviewDto) {
    const training = await this.trainingRepository.findOne({
      where: { id: dto.trainingId },
    });

    if (!training) {
      throw new NotFoundException('Тренировка не найдена');
    }

    const review = this.reviewRepository.create({
      ...dto,
      user,
      training,
    });

    return this.reviewRepository.save(review);
  }

  async findByTrainingId(trainingId: number) {
    return this.reviewRepository.find({
      where: { training: { id: trainingId } },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }
}
