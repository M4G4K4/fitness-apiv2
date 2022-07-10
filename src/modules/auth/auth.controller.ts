import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserCreateDto } from '../users/dto/user-create.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}

  @Post('/register')
  @ApiBody({ type: [UserCreateDto] })
  async login(@Body() userCreate: UserCreateDto) {
    return this.userService.createUser(userCreate);
  }
}
