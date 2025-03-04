import { Controller, Get, Param } from '@nestjs/common';
import { MenuService } from "./menu.service"
import { Menu } from "./menu.entity"


@Controller('menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService
  ) {}

  @Get()
  async getMenu(): Promise<Menu[]> {
    const menu = await this.menuService.findAll()

    console.log(typeof menu[0].id)

    return menu
  }

  @Get(":id")
  async getMenuItem(@Param("id") id: string): Promise<Menu> {
    return this.menuService.findOne(Number(id))
  }
}
