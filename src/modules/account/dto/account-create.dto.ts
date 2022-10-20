import { ApiProperty } from "@nestjs/swagger";
import { IsEmail , IsNotEmpty} from "class-validator";

export class AccountCreateDto {
    @ApiProperty({
        description: 'The account email.',
        type: String,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'The first name of the account.',
        type: String,
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The user password.',
        type: String,
    })
    @IsNotEmpty()
    password: string;
}
