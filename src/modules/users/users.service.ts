import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Users} from './entities/users.entity';
import {Repository} from 'typeorm';
import {UserCreateDto} from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import {UserMapper} from './user.mapper';
import {AuthLogin} from '../auth/dto/auth-login.dto';
import {Account} from "../account/entities/account.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>,
                @InjectRepository(Account) private accountRepository: Repository<Account>) {
    }

    async createUser(userCreate: UserCreateDto) {
        // Validations
        await this.isEmailPresent(userCreate.email);
        await this.isUsernamePresent(userCreate.username);

        const account = await this.accountRepository.findOneBy({
            id: userCreate.account_id
        });

        if (!account) {
            throw new HttpException('Account does not exist', HttpStatus.NOT_FOUND);
        }

        const user = new Users();

        user.email = userCreate.email;
        user.first_name = userCreate.first_name;
        user.last_name = userCreate.last_name;
        user.username = userCreate.username;
        user.password = await UsersService.encryptPassword(userCreate.password);
        user.account = account;
        user.is_active = true;

        const userSave = await this.usersRepository.save(user);

        return UserMapper.userToUserRead(userSave);
    }

    async validateUserLogin(authLogin: AuthLogin): Promise<Users> {
        const user = await this.usersRepository.findOneBy({
            email: authLogin.email
        });

        if (!user) {
            throw new HttpException('There was a problem validation email or password', HttpStatus.UNAUTHORIZED);
        }


        if (!await UsersService.comparePassword(authLogin.password, user.password)) {
            throw new HttpException('There was a problem validation email or password', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }

    async isEmailPresent(email: string) {
        const user = await this.usersRepository.findOneBy({
            email: email
        });

        if (user) {
            throw new HttpException('Email already exists.', HttpStatus.CONFLICT);
        }
    }

    async isUsernamePresent(username: string) {
        const user = await this.usersRepository.findOneBy({
            username: username
        });

        if (user) {
            throw new HttpException('Username already exists.', HttpStatus.CONFLICT);
        }
    }

    private static async encryptPassword(password: string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    private static async comparePassword(loginPassword: string, userPassword: string) {
        return await bcrypt.compare(loginPassword, userPassword);
    }
}
