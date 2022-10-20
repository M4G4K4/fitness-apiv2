import { ApiProperty } from "@nestjs/swagger";
import { IsEmail , IsNotEmpty} from "class-validator";

export class AccountReadDto {
    @ApiProperty({
        description: 'The account id.',
        type: String,
    })
    id: string;

    @ApiProperty({
        description: 'The account email.',
        type: String,
    })
    email: string;

    @ApiProperty({
        description: 'The name of the account.',
        type: String,
    })
    name: string;
}
