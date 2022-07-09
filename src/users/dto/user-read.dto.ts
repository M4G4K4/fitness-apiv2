import { ApiProperty } from '@nestjs/swagger';

export class UserReadDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  full_name: string;
}
