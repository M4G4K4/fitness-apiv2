import { DataSource } from "typeorm";
import { config } from './ormconfig';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'fitness',
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/migrations/**.ts"],
    synchronize: false,
    logging: false,
});

export default AppDataSource
