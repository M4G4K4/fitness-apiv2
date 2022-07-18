import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {config} from '../ormconfig';
import { AccountModule } from './modules/account/account.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AccountModule,
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({isGlobal: true}),
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
