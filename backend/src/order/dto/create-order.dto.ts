import { IsInt, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  trainingId: number;

  @IsInt()
  @IsPositive()
  quantity: number;
}
