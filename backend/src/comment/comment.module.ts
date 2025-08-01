import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TrainingEntity } from '../training/entities/training.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, TrainingEntity])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
