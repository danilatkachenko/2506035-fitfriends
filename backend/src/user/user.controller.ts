import {
  Body,
  Controller,
  Get,
  Put,
  Req,
  UseGuards,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Убедись, что путь верный
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    const user = await this.userService.createUser(dto);
    const { password, ...result } = user;
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(@Req() req: Request, @Body() dto: UpdateUserDto) {
    const user = await this.userService.updateUser((req.user as any).id, dto);
    const { password, ...result } = user;
    return result;
  }
}
