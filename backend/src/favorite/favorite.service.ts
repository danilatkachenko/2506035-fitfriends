import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteEntity } from './favorite.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { TrainingEntity } from '../training/entities/training.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoriteRepo: Repository<FavoriteEntity>,

    @InjectRepository(TrainingEntity)
    private readonly trainingRepo: Repository<TrainingEntity>,
  ) {}

  async addToFavorites(user: UserEntity, trainingId: number) {
    const training = await this.trainingRepo.findOne({
      where: { id: trainingId },
    });
    if (!training) {
      throw new NotFoundException('Тренировка не найдена');
    }

    const favorite = this.favoriteRepo.create({ user, training });
    return this.favoriteRepo.save(favorite);
  }

  async removeFromFavorites(user: UserEntity, trainingId: number) {
    const existing = await this.favoriteRepo.findOne({
      where: { user: { id: user.id }, training: { id: trainingId } },
    });
    if (!existing) {
      throw new NotFoundException('Эта тренировка не в избранном');
    }

    return this.favoriteRepo.remove(existing);
  }

  async getFavorites(user: UserEntity) {
    return this.favoriteRepo.find({
      where: { user: { id: user.id } },
      relations: ['training'],
    });
  }
}
