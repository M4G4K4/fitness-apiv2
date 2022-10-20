import {Injectable} from '@nestjs/common';
import {Account} from "./entities/account.entity";
import {AccountReadDto} from "./dto/account-read.dto";

@Injectable()
export class AccountMapper {
    static accountToAccountRead(account: Account): AccountReadDto {
        const accountRead = new AccountReadDto();

        accountRead.id = account.id;
        accountRead.email = account.email;
        accountRead.name = account.name;

        return accountRead;
    }
}
