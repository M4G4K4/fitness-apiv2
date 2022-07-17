// @ts-ignore

import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import { UserMapper } from './user.mapper';
import {AuthLogin} from "../auth/dto/aut-login.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {
  }

  async createUser(userCreate: UserCreateDto) {
    //TODO: implement mapper for the set the data to User entity
    //TODO: validate if email is not already present in the database
    //TODO: validate if username is not already present in the database

    const user = new Users();

    user.email = userCreate.email;
    user.first_name = userCreate.first_name;
    user.last_name = userCreate.last_name;
    user.username = userCreate.username;
    user.password = await UsersService.encryptPassword(userCreate.password);
    user.is_active = true;

    const userSave = await this.usersRepository.save(user);

    return UserMapper.userToUserRead(userSave);
  }

  async validateUserLogin(authLogin: AuthLogin): Promise<Users> {

    const user = await this.usersRepository.findOneBy({
      email: authLogin.email
    });

    if (!user) {
      throw new HttpException('There was a problem validation email or password', HttpStatus.UNAUTHORIZED);
    }


    if(!await UsersService.comparePassword(authLogin.password, user.password)){
      throw new HttpException('There was a problem validation email or password', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  private static async encryptPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  private static async comparePassword(loginPassword: string, userPassword: string) {
    return await bcrypt.compare(loginPassword, userPassword);
  }
}
