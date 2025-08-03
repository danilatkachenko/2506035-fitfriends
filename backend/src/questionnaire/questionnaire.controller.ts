import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { QuestionnaireService } from './questionnaire.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';

@UseGuards(JwtAuthGuard)
@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Post()
  async createOrUpdate(@Req() req, @Body() dto: CreateQuestionnaireDto) {
    return this.questionnaireService.createOrUpdate(req.user.id, dto);
  }

  @Get('my')
  async getMy(@Req() req) {
    return this.questionnaireService.getByUserId(req.user.id);
  }
}
