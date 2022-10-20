import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Users} from "../../users/entities/users.entity";

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    email: string;

    @Column()
    name: string;

    @Column({nullable: false})
    password: string;

    @Column({default: true})
    is_active: boolean;

    @CreateDateColumn({nullable: false})
    created_at: Date;

    @UpdateDateColumn({nullable: false})
    updated_at: Date;

    @OneToMany(() => Users, (users) => users.account)
    users: Users[];
}
