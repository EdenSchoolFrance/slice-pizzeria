import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Menu } from "./menu.entity"


@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>
    ) {}

    async findAll(): Promise<Menu[]> {
        return this.menuRepository.find()
    }

    async findOne(id: number): Promise<Menu> {
        return this.menuRepository.findOneBy({
            id: id
        })
    }
}
