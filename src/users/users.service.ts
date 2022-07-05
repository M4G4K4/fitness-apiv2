import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private User: Repository<Users>) {}

  async findUser() {
    return null;
  }

  async listAllUsers() {
    return null;
  }
}
