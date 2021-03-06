import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({
    description: 'The user email.',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The first name of the user.',
    type: String,
  })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    description: 'The user last name.',
    type: String,
  })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    description: 'The user username.',
    type: String,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The user password.',
    type: String,
  })
  @IsNotEmpty()
  password: string;
}
