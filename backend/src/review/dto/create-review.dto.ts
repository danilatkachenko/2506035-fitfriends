import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsInt()
  trainingId: number;
}
