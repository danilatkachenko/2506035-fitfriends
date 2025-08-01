import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TrainingEntity } from '../training/entities/training.entity';
import { CommentEntity } from '../comment/comment.entity';
import { FavoriteEntity } from '../favorite/favorite.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  name: string;

  @Column()
  role: 'client' | 'coach';

  @OneToMany(() => TrainingEntity, (training) => training.coach)
  trainings: TrainingEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  comments: CommentEntity[];

  @OneToMany(() => FavoriteEntity, (fav) => fav.user)
  favorites: FavoriteEntity[];
}
