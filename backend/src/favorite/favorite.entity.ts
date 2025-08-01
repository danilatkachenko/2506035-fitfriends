import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { TrainingEntity } from '../training/entities/training.entity';

@Entity('favorites')
export class FavoriteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.favorites, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(() => TrainingEntity, { onDelete: 'CASCADE' })
  training: TrainingEntity;
}
