import { Controller, Get } from '@nestjs/common';

import { PIZZE, Pizza } from './menu.data';

@Controller('menu')
export class MenuController {
  constructor() {}

  @Get()
  getMenu(): Pizza[] {
    return PIZZE;
  }
}
