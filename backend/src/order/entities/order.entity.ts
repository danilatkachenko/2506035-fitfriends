import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { TrainingEntity } from '../../training/entities/training.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.orders, { eager: true })
  client: UserEntity;

  @ManyToOne(() => TrainingEntity, { eager: true })
  training: TrainingEntity;

  @Column()
  quantity: number;

  @Column()
  totalPrice: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  })
  status: 'pending' | 'accepted' | 'rejected';

  @CreateDateColumn()
  createdAt: Date;
}
