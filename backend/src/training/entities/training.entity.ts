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

export enum TrainingLevel {
  Beginner = 'beginner',
  Amateur = 'amateur',
  Professional = 'professional',
}

export enum TrainingType {
  Yoga = 'yoga',
  Running = 'running',
  Boxing = 'boxing',
  Stretching = 'stretching',
  Crossfit = 'crossfit',
  Aerobics = 'aerobics',
  Pilates = 'pilates',
}

export enum Gender {
  Any = 'any',
  Male = 'male',
  Female = 'female',
}

@Entity('trainings')
export class TrainingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  duration: number;

  @Column({ default: 0 })
  calories: number;

  @Column({ default: 0 })
  price: number;

  @ManyToOne(() => UserEntity, (user) => user.trainings)
  coach: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.training)
  comments: CommentEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.training, { cascade: true })
  reviews: ReviewEntity[];

  @Column({
    type: 'enum',
    enum: TrainingLevel,
    default: TrainingLevel.Beginner,
  })
  level: TrainingLevel;

  @Column({ type: 'enum', enum: TrainingType, default: TrainingType.Yoga })
  type: TrainingType;

  @Column({ type: 'enum', enum: Gender, default: Gender.Any })
  gender: Gender;

  @Column({ default: false })
  specialOffer: boolean;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @CreateDateColumn()
  createdAt: Date;
}
