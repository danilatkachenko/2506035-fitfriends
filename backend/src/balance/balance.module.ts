import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceEntity } from './entities/balance.entity';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { UserEntity } from '../user/user.entity';
import { TrainingEntity } from '../training/entities/training.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BalanceEntity, UserEntity, TrainingEntity]),
  ],
  providers: [BalanceService],
  controllers: [BalanceController],
})
export class BalanceModule {}
