import { IsBoolean } from 'class-validator';

export class ActiveUserDto {
  @IsBoolean()
  active?: boolean;
}
