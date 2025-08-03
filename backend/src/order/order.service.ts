import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { TrainingEntity } from '../training/entities/training.entity';
import { UserEntity } from '../user/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { BalanceService } from '../balance/balance.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
    @InjectRepository(TrainingEntity)
    private readonly trainingRepo: Repository<TrainingEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly balanceService: BalanceService,
  ) {}

  async createOrder(clientId: number, dto: CreateOrderDto) {
    const training = await this.trainingRepo.findOne({
      where: { id: dto.trainingId },
      relations: ['coach'],
    });
    if (!training) {
      throw new NotFoundException('Тренировка не найдена');
    }

    const client = await this.userRepo.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException('Пользователь не найден');
    }

    // Запрет на покупку своей же тренировки
    if (training.coach.id === clientId) {
      throw new ForbiddenException('Нельзя купить свою же тренировку');
    }
    if (dto.quantity < 1) {
      throw new ForbiddenException('Количество должно быть больше нуля');
    }

    const totalPrice = training.price * dto.quantity;

    const order = this.orderRepo.create({
      client: { id: client.id } as UserEntity,
      training: { id: training.id } as TrainingEntity,
      quantity: dto.quantity,
      totalPrice,
      status: 'pending',
    });

    return this.orderRepo.save(order);
  }

  async getMyOrders(userId: number) {
    return this.orderRepo.find({ where: { client: { id: userId } } });
  }

  async getOrdersForCoach(coachId: number) {
    return this.orderRepo.find({
      where: { training: { coach: { id: coachId } } },
      relations: ['training', 'training.coach', 'client'],
    });
  }

  async updateOrderStatus(
    orderId: number,
    coachId: number,
    status: 'pending' | 'accepted' | 'rejected',
  ) {
    const order = await this.orderRepo.findOne({
      where: { id: orderId },
      relations: ['training', 'client', 'training.coach'],
    });

    if (!order) {
      throw new NotFoundException('Заказ не найден');
    }

    if (order.training.coach.id !== coachId) {
      throw new ForbiddenException('Вы не можете изменять этот заказ');
    }

    order.status = status;
    const savedOrder = await this.orderRepo.save(order);

    // 🔹 Если заказ подтверждён — пополняем баланс
    if (status === 'accepted') {
      await this.balanceService.addToBalance(
        order.client.id,
        order.training.id,
        order.quantity,
      );
    }
    return savedOrder;
  }
}
