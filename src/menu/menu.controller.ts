import { Controller, Get } from '@nestjs/common';

@Controller('menu')
export class MenuController {
  constructor() {}

  @Get()
  getMenu(): string {
    return 'Hello';
  }
}
