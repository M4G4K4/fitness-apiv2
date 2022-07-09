import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
