import {Body, Controller, Post} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import {AccountService} from './account.service';
import { AccountCreateDto } from './dto/account-create.dto'

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {
    }

    @Post()
    @ApiBody({ type: [AccountCreateDto] })
    async createAccount(@Body() accountCreateDto: AccountCreateDto) {
        return this.accountService.createAccount(accountCreateDto);
    }
}
