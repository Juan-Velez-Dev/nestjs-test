import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  age: number;
}
