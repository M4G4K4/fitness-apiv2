import { Controller, Get, Post, Request} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  /*
    constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}
   */

  async register(user: any) {
    return null;
  }

  @Post('auth/login')
  async login(@Request() req) {
    //return this.authService.login(req.user);
    return null;
  }

  //@UseGuards(JwtAuthGuard)
  @Get('auth/login')
  getProfile(@Request() req) {
    return null;
    //return req.user;
  }

  /*
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
  */
}
