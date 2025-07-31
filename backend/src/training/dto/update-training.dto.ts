import {
  IsOptional,
  IsString,
  IsInt,
  Min,
  Max,
  IsNumber,
} from 'class-validator';

export class UpdateTrainingDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(300)
  duration?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(1000)
  calories?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;
}
