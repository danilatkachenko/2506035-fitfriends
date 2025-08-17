import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDateString,
  IsIn,
  IsOptional,
} from 'class-validator';

export class RegisterUserDto {
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

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsString()
  location?: string;
}
