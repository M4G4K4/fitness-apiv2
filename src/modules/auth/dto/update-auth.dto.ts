import { PartialType } from '@nestjs/mapped-types';
import { AuthLogin } from './auth-login.dto';

export class UpdateAuthDto extends PartialType(AuthLogin) {}
