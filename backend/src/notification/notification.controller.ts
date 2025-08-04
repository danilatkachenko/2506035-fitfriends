import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  Req,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async create(@Req() req, @Body('message') message: string) {
    return this.notificationService.createNotification(req.user.id, message);
  }

  @Get()
  async getAll(@Req() req) {
    return this.notificationService.getNotifications(req.user.id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.notificationService.deleteNotification(id, req.user.id);
  }
}
