import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserCreateDto } from '../users/dto/user-create.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}

  @Post('/register')
  async login(@Body() userCreate: UserCreateDto) {
    return this.userService.createUser(userCreate);
  }
}
