import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  firsName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsInt()
  age?: number;

  role?: string;
}
