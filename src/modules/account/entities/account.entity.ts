import {Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Users} from "../../users/entities/users.entity";

export class Account {
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

    @OneToMany(() => Users, (users) => users.id)
    users: Users[];
}
