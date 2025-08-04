import { IsInt } from 'class-validator';

export class CreateFriendDto {
  @IsInt()
  addresseeId: number; // ID того, кому отправляем запрос
}
