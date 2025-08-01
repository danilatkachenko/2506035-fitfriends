import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Req,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() dto: CreateCommentDto) {
    return this.commentService.create(req.user, dto);
  }

  @Get(':trainingId')
  findForTraining(@Param('trainingId', ParseIntPipe) trainingId: number) {
    return this.commentService.findForTraining(trainingId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteComment(@Param('id', ParseIntPipe) id: number, @Req() req) {
    await this.commentService.delete(id, req.user.id);
    return { message: 'Комментарий удалён' };
  }
}
