import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireEntity } from './questionnaire.entity';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionnaireEntity, UserEntity])],
  providers: [QuestionnaireService],
  controllers: [QuestionnaireController],
})
export class QuestionnaireModule {}
