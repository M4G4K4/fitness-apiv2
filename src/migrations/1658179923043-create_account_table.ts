import { MigrationInterface, QueryRunner } from "typeorm"

export class createAccountTable1658179923043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                CREATE TABLE account
                (
                    id         varchar(255) NOT NULL DEFAULT uuid_generate_v4(),
                    email      varchar(255) not null,
                    name varchar(50)  null,
                    password   varchar(100) not null,
                    is_active  boolean default true,
                    created_at timestamp without time zone NOT NULL DEFAULT now(),
                    updated_at timestamp without time zone NOT NULL DEFAULT now(),
                    CONSTRAINT pk_account PRIMARY KEY (id)
                );
            `,
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE account;`,
        )
    }

}
