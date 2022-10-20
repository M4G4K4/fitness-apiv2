import { Injectable } from '@nestjs/common';
import { UserReadDto } from './dto/user-read.dto';
import { Users } from './entities/users.entity';
import { UserCreateDto } from "./dto/user-create.dto";
import {UsersService} from "./users.service";

@Injectable()
export class UserMapper {
  static userToUserRead(user: Users): UserReadDto {
    const userRead = new UserReadDto();

    userRead.id = user.id;
    userRead.email = user.email;
    userRead.first_name = user.first_name;
    userRead.last_name = user.last_name;
    userRead.username = user.username;
    userRead.full_name = user.first_name + ' ' + user.last_name;

    return userRead;
  }

  /*
      user.email = userCreate.email;
    user.first_name = userCreate.first_name;
    user.last_name = userCreate.last_name;
    user.username = userCreate.username;
    user.password = await UsersService.encryptPassword(userCreate.password);
    user.is_active = true;
   */
  static async userCreateToUser(userCreate: UserCreateDto): Promise<Users> {
    const user = new Users();

    user.email = userCreate.email;
    user.first_name = userCreate.first_name;
    user.last_name = userCreate.last_name;
    user.username = userCreate.username;
    user.password = await UsersService.encryptPassword(userCreate.password);
    user.is_active = true;

    return user;
  }
}
