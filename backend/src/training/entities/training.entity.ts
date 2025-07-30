import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';

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
}
