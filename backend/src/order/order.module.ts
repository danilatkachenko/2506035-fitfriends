import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TrainingEntity } from '../training/entities/training.entity';
import { UserEntity } from '../user/user.entity';
import { BalanceModule } from '../balance/balance.module';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, TrainingEntity, UserEntity]),
    BalanceModule,
    NotificationModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
