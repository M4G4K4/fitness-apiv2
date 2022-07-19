import { Injectable } from '@nestjs/common';
import {AuthLogin} from './dto/auth-login.dto';
import {UsersService} from "../users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async login(authLogin: AuthLogin) {
        const user = await this.userService.validateUserLogin(authLogin);

        const payload = {
            username: user.username,
            sub: user.id,
            account: user.account.id
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
