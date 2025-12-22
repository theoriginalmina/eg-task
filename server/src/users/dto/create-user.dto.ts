import { IsEmail, IsStrongPassword, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
