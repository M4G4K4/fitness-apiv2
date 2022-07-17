import {Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserCreateDto } from '../users/dto/user-create.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {AuthLogin} from "./dto/aut-login.dto";
import {AuthService} from "./auth.service";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService,
              private authService: AuthService) {}

  @Post('/register')
  @ApiBody({ type: [UserCreateDto] })
  async register(@Body() userCreate: UserCreateDto) {
    return this.userService.createUser(userCreate);
  }

  @Get("/login")
  @ApiBody({type: [AuthLogin]})
  async login (@Body() authLogin: AuthLogin){
    return this.authService.login(authLogin);
  }
}
