import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteEntity } from './favorite.entity';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { TrainingEntity } from '../training/entities/training.entity';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FavoriteEntity, UserEntity, TrainingEntity]),
  ],
  providers: [FavoriteService],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
