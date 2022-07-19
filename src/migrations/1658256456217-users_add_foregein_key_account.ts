import { MigrationInterface, QueryRunner } from "typeorm"

export class usersAddForegeinKeyAccount1658256456217 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                ALTER TABLE users
                ADD COLUMN account_id varchar(255) not null,
                ADD CONSTRAINT fk_users_account foreign key (account_id) references account (id);
            `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                ALTER TABLE users
                DROP CONSTRAINT fk_users_account;

                ALTER TABLE users
                DROP COLUMN account_id;
            `,
        )
    }

}
