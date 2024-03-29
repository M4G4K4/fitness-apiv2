import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {Account} from "../../account/entities/account.entity";

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    email: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    username: string;

    @Column({nullable: false})
    password: string;

    @Column({default: true})
    is_active: boolean;

    @CreateDateColumn({nullable: false})
    created_at: Date;

    @UpdateDateColumn({nullable: false})
    updated_at: Date;

    @ManyToOne(() => Account, (account) => account.users)
    @JoinColumn({name: "account_id", referencedColumnName: "id"})
    account: Account;
}
