import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingEntity } from './entities/training.entity';
import { Repository } from 'typeorm';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UserEntity } from '../user/user.entity';
import { FilterTrainingDto } from './dto/filter-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

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
  async getAll(filters: FilterTrainingDto) {
    const query = this.trainingRepo
      .createQueryBuilder('training')
      .leftJoinAndSelect('training.coach', 'coach');

    if (filters.minPrice !== undefined) {
      query.andWhere('training.price >= :minPrice', {
        minPrice: filters.minPrice,
      });
    }

    if (filters.maxPrice !== undefined) {
      query.andWhere('training.price <= :maxPrice', {
        maxPrice: filters.maxPrice,
      });
    }

    if (filters.sort) {
      query.orderBy(`training.${filters.sort}`, 'ASC');
    }

    return query.getMany();
  }
  async getById(id: number) {
    const training = await this.trainingRepo.findOne({
      where: { id },
      relations: ['coach'],
    });

    if (!training) {
      throw new NotFoundException('Тренировка не найдена');
    }

    const { password, ...coachWithoutPassword } = training.coach;
    return { ...training, coach: coachWithoutPassword };
  }
  async update(id: number, coachId: number, dto: UpdateTrainingDto) {
    const training = await this.trainingRepo.findOne({
      where: { id },
      relations: ['coach'],
    });

    if (!training) throw new NotFoundException('Тренировка не найдена');
    if (training.coach.id !== coachId)
      throw new ForbiddenException('Нельзя редактировать чужую тренировку');

    Object.assign(training, dto);
    return this.trainingRepo.save(training);
  }
  async delete(id: number, coachId: number) {
    const training = await this.trainingRepo.findOne({
      where: { id },
      relations: ['coach'],
    });

    if (!training) throw new NotFoundException('Тренировка не найдена');
    if (training.coach.id !== coachId)
      throw new ForbiddenException('Нельзя удалить чужую тренировку');

    await this.trainingRepo.remove(training);
  }
  async updateTraining(
    trainingId: number,
    coachId: number,
    dto: UpdateTrainingDto,
  ) {
    const training = await this.trainingRepo.findOne({
      where: { id: trainingId },
      relations: ['coach'],
    });

    if (!training) {
      throw new NotFoundException('Тренировка не найдена');
    }

    if (training.coach.id !== coachId) {
      throw new ForbiddenException(
        'Вы не можете редактировать чужую тренировку',
      );
    }

    Object.assign(training, dto);
    return this.trainingRepo.save(training);
  }
}
