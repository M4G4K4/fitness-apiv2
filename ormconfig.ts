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

//TODO: Check this
/*
Use this to class to use in:
    imports: [
        TypeOrmModule.forRoot(AppConstant.DB_CONFIG)

export default class AppConstant {
    static DB_CONFIG: TypeOrmModuleOptions = {
        type: 'postgres', // HERE USE THE CONFIG.GET ou process.env.XXX
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'fitness',
        autoLoadEntities: true,
        migrations: [__dirname + '/migrations/*.ts'],
        synchronize: false,
    }
}
 */
