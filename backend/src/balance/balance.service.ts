import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BalanceEntity } from './entities/balance.entity';
import { UserEntity } from '../user/user.entity';
import { TrainingEntity } from '../training/entities/training.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(BalanceEntity)
    private balanceRepo: Repository<BalanceEntity>,
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
    @InjectRepository(TrainingEntity)
    private trainingRepo: Repository<TrainingEntity>,
  ) {}

  async getUserBalance(userId: number) {
    return this.balanceRepo.find({ where: { user: { id: userId } } });
  }

  async addToBalance(userId: number, trainingId: number, quantity: number) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    const training = await this.trainingRepo.findOne({
      where: { id: trainingId },
    });

    if (!user || !training) {
      throw new NotFoundException('Пользователь или тренировка не найдены');
    }

    let balance = await this.balanceRepo.findOne({
      where: { user: { id: userId }, training: { id: trainingId } },
    });

    if (balance) {
      balance.quantity += quantity;
    } else {
      balance = this.balanceRepo.create({ user, training, quantity });
    }

    return this.balanceRepo.save(balance);
  }

  async deductFromBalance(
    userId: number,
    trainingId: number,
    quantity: number,
  ) {
    const balance = await this.balanceRepo.findOne({
      where: { user: { id: userId }, training: { id: trainingId } },
    });

    if (!balance) {
      throw new NotFoundException('Баланс для этой тренировки не найден');
    }

    if (balance.quantity < quantity) {
      throw new Error('Недостаточно тренировок на балансе');
    }

    balance.quantity -= quantity;
    return this.balanceRepo.save(balance);
  }
}
