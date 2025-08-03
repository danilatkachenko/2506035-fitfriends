import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { TrainingEntity } from '../../training/entities/training.entity';

@Entity('balances')
export class BalanceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { eager: true, onDelete: 'CASCADE' })
  user: UserEntity;

  @ManyToOne(() => TrainingEntity, { eager: true, onDelete: 'CASCADE' })
  training: TrainingEntity;

  @Column({ type: 'int', default: 0 })
  quantity: number;
}
