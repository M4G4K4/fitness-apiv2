import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

export class AuthLogin {

    @ApiProperty({
        description: 'The user email.',
        type: String,
    })
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'The user password.',
        type: String,
    })
    @IsNotEmpty()
    password: string;
}
