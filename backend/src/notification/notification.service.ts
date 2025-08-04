import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepo: Repository<NotificationEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async createNotification(userId: number, message: string) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const notification = this.notificationRepo.create({
      user,
      message,
    });

    return this.notificationRepo.save(notification);
  }

  async getNotifications(userId: number) {
    return this.notificationRepo.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
    });
  }

  async deleteNotification(id: number, userId: number) {
    const notification = await this.notificationRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!notification) {
      throw new NotFoundException('Уведомление не найдено');
    }

    if (notification.user.id !== userId) {
      throw new ForbiddenException('Нельзя удалить чужое уведомление');
    }

    await this.notificationRepo.remove(notification);
    return { message: 'Уведомление удалено' };
  }
}
