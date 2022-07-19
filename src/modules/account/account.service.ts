import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Account} from "./entities/account.entity";

@Injectable()
export class AccountService {
    constructor(@InjectRepository(Account) private accountRepository: Repository<Account>) {}


    async findOne(id: string) {
        return `This action returns a #${id} account`;
    }

}
