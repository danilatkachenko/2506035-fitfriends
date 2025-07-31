import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingEntity } from './entities/training.entity';
import { Repository } from 'typeorm';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(TrainingEntity)
    private readonly trainingRepo: Repository<TrainingEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async createTraining(coachId: number, dto: CreateTrainingDto) {
    const coach = await this.userRepo.findOne({ where: { id: coachId } });

    if (!coach || coach.role !== 'coach') {
      throw new Error('Only coaches can create trainings');
    }

    const training = this.trainingRepo.create({ ...dto, coach });
    const newTraining = await this.trainingRepo.save(training);

    // Удаляем пароль из объекта coach перед возвратом
    const { password, ...coachWithoutPassword } = coach;

    return {
      ...newTraining,
      coach: coachWithoutPassword,
    };
  }
  async getAllTrainings() {
    return this.trainingRepo.find({
      relations: ['coach'],
      select: {
        id: true,
        title: true,
        description: true,
        duration: true,
        calories: true,
        price: true,
        coach: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    });
  }
}
