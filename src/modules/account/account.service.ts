import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';
import { AccountCreateDto } from './dto/account-create.dto';
import {AccountMapper} from './account.mapper';
import {Account} from "./entities/account.entity";

@Injectable()
export class AccountService {
    constructor(@InjectRepository(Account) private accountRepository: Repository<Account>) {
    }

    async createAccount(accountCreateDto: AccountCreateDto){


        const account = new Account();
        account.name = accountCreateDto.name;
        account.email = accountCreateDto.email;
        account.password = await AccountService.encryptPassword(accountCreateDto.password);

        const accountSave = await this.accountRepository.save(account);

        return AccountMapper.accountToAccountRead(accountSave);
    }


    //TODO: Refactor this to its own Service to be used acrossed project and not being repeated
    private static async encryptPassword(password: string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    private static async comparePassword(loginPassword: string, userPassword: string) {
        return await bcrypt.compare(loginPassword, userPassword);
    }

}
