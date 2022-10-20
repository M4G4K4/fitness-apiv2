import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from './entities/users.entity';
import {UsersController} from './users.controller';
import {Account} from "../account/entities/account.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Account])
    ],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {
}
