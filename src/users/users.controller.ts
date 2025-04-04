import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from "./users.service"
import { User } from "./users.entity"
 
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post()
    register(@Body() userData: Partial<User>): string {

        console.log("=====")
        console.log(userData)
        console.log("=====")

        return "Foo"
    }
}
