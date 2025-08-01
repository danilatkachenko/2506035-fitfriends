import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UserEntity } from '../user/user.entity';
import { TrainingEntity } from '../training/entities/training.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,

    @InjectRepository(TrainingEntity)
    private readonly trainingRepo: Repository<TrainingEntity>,
  ) {}

  async create(user: UserEntity, dto: CreateCommentDto) {
    const training = await this.trainingRepo.findOne({
      where: { id: dto.trainingId },
    });

    if (!training) {
      throw new NotFoundException('Training not found');
    }

    const comment = this.commentRepo.create({
      text: dto.text,
      author: user,
      training,
    });

    return this.commentRepo.save(comment);
  }

  async findForTraining(trainingId: number) {
    return this.commentRepo.find({
      where: { training: { id: trainingId } },
      order: { createdAt: 'DESC' },
    });
  }

  async delete(commentId: number, userId: number) {
    const comment = await this.commentRepo.findOne({
      where: { id: commentId },
      relations: ['author'],
    });

    if (!comment) {
      throw new NotFoundException('Комментарий не найден');
    }

    if (comment.author.id !== userId) {
      throw new ForbiddenException('Вы не можете удалить чужой комментарий');
    }

    await this.commentRepo.remove(comment);
  }

  async deleteComment(commentId: number, userId: number) {
    const comment = await this.commentRepo.findOne({
      where: { id: commentId },
      relations: ['author'],
    });

    if (!comment) {
      throw new NotFoundException('Комментарий не найден');
    }

    if (comment.author.id !== userId) {
      throw new ForbiddenException('Вы не можете удалить чужой комментарий');
    }

    await this.commentRepo.remove(comment);
  }
}
