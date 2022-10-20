import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'fitness',
    autoLoadEntities: true,
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
}