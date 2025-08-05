import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { TrainingEntity } from '../../training/entities/training.entity';

@Entity('reviews')
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'int' })
  rating: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.reviews, { eager: true })
  user: UserEntity;

  @ManyToOne(() => TrainingEntity, (training) => training.reviews, {
    onDelete: 'CASCADE',
  })
  training: TrainingEntity;
}
