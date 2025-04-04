import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    create(): string {
        return "create"
    }

    findByEmail(email: string): string {
        return "Your mail: " + email
    }
}
