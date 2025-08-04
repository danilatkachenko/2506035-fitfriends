import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';

export enum FriendStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Rejected = 'rejected',
}

@Entity('friends')
export class FriendEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { eager: true })
  requester: UserEntity; // кто отправил запрос

  @ManyToOne(() => UserEntity, { eager: true })
  addressee: UserEntity; // кому отправили

  @Column({
    type: 'enum',
    enum: FriendStatus,
    default: FriendStatus.Pending,
  })
  status: FriendStatus;

  @CreateDateColumn()
  createdAt: Date;
}
