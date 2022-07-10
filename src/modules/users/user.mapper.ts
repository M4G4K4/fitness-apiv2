import { Injectable } from '@nestjs/common';
import { UserReadDto } from './dto/user-read.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UserMapper {
  static userToUserRead(user: Users): UserReadDto {
    const userRead = new UserReadDto();

    userRead.email = user.email;
    userRead.first_name = user.first_name;
    userRead.last_name = user.last_name;
    userRead.username = user.username;
    userRead.full_name = user.first_name + ' ' + user.last_name;

    return userRead;
  }
}
