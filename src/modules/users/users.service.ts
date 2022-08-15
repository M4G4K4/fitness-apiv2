import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import { UserMapper } from './user.mapper';
import {AuthLogin} from '../auth/dto/auth-login.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {
  }

  async createUser(userCreate: UserCreateDto) {
    await this.userValidations(userCreate);

    const user = await UserMapper.userCreateToUser(userCreate);

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

  static async encryptPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async userValidations(userCreate: UserCreateDto){
    const userEmail = await this.usersRepository.findOneBy({
      email: userCreate.email
    });

    if(userEmail){
      throw new HttpException('Email already registered', HttpStatus.CONFLICT);
    }

    const userUsername = await this.usersRepository.findOneBy({
      username: userCreate.username
    });

    if(userUsername){
      throw new HttpException('Username already registered', HttpStatus.CONFLICT);
    }
  }

  private static async comparePassword(loginPassword: string, userPassword: string) {
    return await bcrypt.compare(loginPassword, userPassword);
  }
}
