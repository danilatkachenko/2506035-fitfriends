import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  UseGuards,
} from '@nestjs/common';
import { FriendService } from './friend.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UserEntity } from '../user/user.entity';

@Controller('friends')
@UseGuards(JwtAuthGuard)
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post()
  sendRequest(@GetUser() user: UserEntity, @Body() dto: CreateFriendDto) {
    return this.friendService.sendRequest(user.id, dto);
  }

  @Post(':id/accept')
  accept(@GetUser() user: UserEntity, @Param('id') id: number) {
    return this.friendService.acceptRequest(user.id, id);
  }

  @Delete(':id')
  remove(@GetUser() user: UserEntity, @Param('id') id: number) {
    return this.friendService.removeFriend(user.id, id);
  }

  @Get()
  listFriends(@GetUser() user: UserEntity) {
    return this.friendService.listFriends(user.id);
  }

  @Get('requests')
  listRequests(@GetUser() user: UserEntity) {
    return this.friendService.listRequests(user.id);
  }
}
