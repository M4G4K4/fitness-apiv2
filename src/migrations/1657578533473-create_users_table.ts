import { MigrationInterface, QueryRunner } from "typeorm"

export class createUsersTable1657578533473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                CREATE TABLE users
                (
                    id         varchar(255) not null DEFAULT uuid_generate_v4(),
                    email      varchar(255) not null,
                    first_name varchar(50)  null,
                    last_name  varchar(50)  null,
                    username   varchar(100) null,
                    password   varchar(100) not null,
                    is_active  boolean default true,
                    created_at timestamp without time zone NOT NULL DEFAULT now(),
                    updated_at timestamp without time zone NOT NULL DEFAULT now(),
                    CONSTRAINT pk_users PRIMARY KEY (id)
                );
            `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE users;`,
        )
    }

}
