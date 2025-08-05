import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { CommentEntity } from '../../comment/comment.entity';
import { ReviewEntity } from '../../review/entities/review.entity';

@Entity('trainings')
export class TrainingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  duration: number; // в минутах

  @Column({ default: 0 })
  calories: number;

  @Column({ default: 0 })
  price: number;

  @ManyToOne(() => UserEntity, (user) => user.trainings)
  coach: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.training)
  comments: CommentEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => ReviewEntity, (review) => review.training, { cascade: true })
  reviews: ReviewEntity[];
}
