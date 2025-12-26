import { IsEmail, IsStrongPassword, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword(
    {},
    {
      message:
        'Password must contain:\n' +
        '- At least 8 characters\n' +
        '- One uppercase letter\n' +
        '- One number\n' +
        '- One special character',
    },
  )
  password: string;
}
