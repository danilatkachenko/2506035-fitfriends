import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('questionnaires')
export class QuestionnaireEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity, (user) => user.questionnaire, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: UserEntity;

  @Column({ type: 'enum', enum: ['beginner', 'intermediate', 'advanced'] })
  trainingLevel: 'beginner' | 'intermediate' | 'advanced';

  @Column({
    type: 'enum',
    enum: ['yoga', 'running', 'boxing', 'stretching', 'strength'],
  })
  trainingType: 'yoga' | 'running' | 'boxing' | 'stretching' | 'strength';

  @Column()
  trainingDuration: number; // в минутах

  @Column()
  caloriesToBurn: number; // в день

  @Column()
  daysPerWeek: number; // сколько дней в неделю тренируется
}
