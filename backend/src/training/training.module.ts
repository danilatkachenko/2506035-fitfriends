import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingEntity } from './entities/training.entity';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { UserEntity } from '../user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TrainingEntity, UserEntity])],
    controllers: [TrainingController],
    providers: [TrainingService],
})
export class TrainingModule {}
