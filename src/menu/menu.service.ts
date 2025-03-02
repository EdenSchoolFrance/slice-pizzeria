import { Injectable, Inject } from '@nestjs/common';
import { Repository } from "typeorm"

import { Menu } from "./menu.entity"


@Injectable()
export class MenuService {
    constructor(
        @Inject("MENU_REPOSITORY")
        private menuRepository: Repository<Menu>
    ) {}

    async findAll(): Promise<any> {
        return this.menuRepository.find()
    }
}
