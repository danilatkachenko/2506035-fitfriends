import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TrainingEntity } from '../training/entities/training.entity';

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
}
