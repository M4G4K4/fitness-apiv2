import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import { UserMapper } from './user.mapper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private User: Repository<Users>
  ) {}

  async createUser(userCreate: UserCreateDto) {
    //TODO: implement mapper for the set the data to User entity
    //TODO: validate if email is not already present in the database
    //TODO: validate if username is not already present in the database

    const user = new Users();

    user.email = userCreate.email;
    user.first_name = userCreate.first_name;
    user.last_name = userCreate.last_name;
    user.username = userCreate.username;
    user.password = await this.encryptPassword(userCreate.password);
    user.is_active = true;

    const userSave = await this.User.save(user);

    return UserMapper.userToUserRead(userSave);
  }

  private async encryptPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
