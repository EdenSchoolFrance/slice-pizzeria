import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(
    @Body() userData: Partial<User>,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.create(userData);

    const { password, ...result } = user;
    return result;
  }
}
