import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsIn,
  ValidateIf,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsIn(['client', 'coach'])
  role: 'client' | 'coach';

  // Поля для клиента
  @ValidateIf(o => o.role === 'client')
  @IsDateString()
  @IsOptional()
  birthDate?: string;

  @ValidateIf(o => o.role === 'client')
  @IsIn(['beginner', 'intermediate', 'advanced'])
  @IsOptional()
  trainingLevel?: string;

  // Поля для коуча
  @ValidateIf(o => o.role === 'coach')
  @IsString()
  @IsOptional()
  certificate?: string;

  @ValidateIf(o => o.role === 'coach')
  @IsString()
  @IsOptional()
  description?: string;
}
