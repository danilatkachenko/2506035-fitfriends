import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() dto: CreateUserDto) {
        const user = await this.userService.createUser(dto);
        // Лучше не возвращать пароль даже захешированный
        const { password, ...result } = user;
        return result;
    }
}
