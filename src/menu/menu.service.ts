import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async findAll(): Promise<Menu[]> {
    return this.menuRepository.find({
      relations: ['category']
    });
  }

  async findOne(id: string): Promise<Menu> {
    return this.menuRepository.findOne({
      where: { id },
      relations: ['category']
    });
  }
}
