import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcrypt"

import { UsersService } from "../users/users.service"

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email)
        if (!user) throw new UnauthorizedException("Email not found")

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) throw new UnauthorizedException("Invalid password")

        const { password: _, ...userWithoutPassword } = user
        return userWithoutPassword
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
