import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    const user = await this.userService.createUser(dto);
    const { password, ...result } = user;
    return result;
  }

  @UseGuards(JwtAuthGuard) // ✅ Используй свой guard
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
