import {Controller, Get, UseGuards} from '@nestjs/common';
import {ApiBody} from "@nestjs/swagger";
import {AuthLogin} from "../auth/dto/auth-login.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('users')
export class UsersController {

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBody({type: [AuthLogin]})
    async getUsersList (){
        return [];
    }
}
