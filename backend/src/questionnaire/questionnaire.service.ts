import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionnaireEntity } from './questionnaire.entity';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectRepository(QuestionnaireEntity)
    private readonly questionnaireRepo: Repository<QuestionnaireEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async createOrUpdate(userId: number, dto: CreateQuestionnaireDto) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    let questionnaire = await this.questionnaireRepo.findOne({
      where: { user: { id: userId } },
    });

    if (questionnaire) {
      Object.assign(questionnaire, dto);
    } else {
      questionnaire = this.questionnaireRepo.create({ ...dto, user });
    }

    return this.questionnaireRepo.save(questionnaire);
  }

  async getByUserId(userId: number) {
    const questionnaire = await this.questionnaireRepo.findOne({
      where: { user: { id: userId } },
    });

    if (!questionnaire) {
      throw new NotFoundException('Опросник не найден');
    }

    return questionnaire;
  }
}
