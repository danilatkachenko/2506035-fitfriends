import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FriendEntity, FriendStatus } from './entities/friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(FriendEntity)
    private readonly friendRepository: Repository<FriendEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async sendRequest(userId: number, dto: CreateFriendDto) {
    if (userId === dto.addresseeId) {
      throw new BadRequestException('Нельзя добавить себя в друзья');
    }

    const addressee = await this.userRepository.findOne({
      where: { id: dto.addresseeId },
    });
    if (!addressee) throw new NotFoundException('Пользователь не найден');

    const existing = await this.friendRepository.findOne({
      where: [
        { requester: { id: userId }, addressee: { id: dto.addresseeId } },
        { requester: { id: dto.addresseeId }, addressee: { id: userId } },
      ],
      relations: ['requester', 'addressee'],
    });

    if (existing) {
      throw new BadRequestException('Запрос уже существует');
    }

    const request = this.friendRepository.create({
      requester: { id: userId } as UserEntity,
      addressee,
      status: FriendStatus.Pending,
    });

    return this.friendRepository.save(request);
  }

  async acceptRequest(userId: number, requestId: number) {
    const request = await this.friendRepository.findOne({
      where: { id: requestId },
      relations: ['requester', 'addressee'],
    });
    if (!request) throw new NotFoundException('Запрос не найден');

    if (request.addressee.id !== userId) {
      throw new ForbiddenException('Нельзя принять чужой запрос');
    }

    request.status = FriendStatus.Accepted;
    return this.friendRepository.save(request);
  }

  async removeFriend(userId: number, friendId: number) {
    const request = await this.friendRepository.findOne({
      where: { id: friendId },
      relations: ['requester', 'addressee'],
    });
    if (!request) throw new NotFoundException('Дружба не найдена');

    if (request.requester.id !== userId && request.addressee.id !== userId) {
      throw new ForbiddenException('Нельзя удалить чужую дружбу');
    }

    await this.friendRepository.remove(request);
    return { message: 'Удалено' };
  }

  async listFriends(userId: number) {
    return this.friendRepository.find({
      where: [
        { requester: { id: userId }, status: FriendStatus.Accepted },
        { addressee: { id: userId }, status: FriendStatus.Accepted },
      ],
      relations: ['requester', 'addressee'],
    });
  }

  async listRequests(userId: number) {
    return this.friendRepository.find({
      where: { addressee: { id: userId }, status: FriendStatus.Pending },
      relations: ['requester', 'addressee'],
    });
  }
}
