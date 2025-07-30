import {
  IsOptional,
  IsString,
  IsIn,
  IsDateString,
  ValidateIf,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsIn(['client', 'coach'])
  role?: 'client' | 'coach';

  @ValidateIf((o: CreateUserDto) => o.role === 'client')
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @ValidateIf((o: CreateUserDto) => o.role === 'client')
  @IsOptional()
  @IsIn(['beginner', 'intermediate', 'advanced'])
  trainingLevel?: string;

  @ValidateIf((o: CreateUserDto) => o.role === 'coach')
  @IsOptional()
  @IsString()
  certificate?: string;

  @ValidateIf((o: CreateUserDto) => o.role === 'coach')
  @IsOptional()
  @IsString()
  description?: string;
}
