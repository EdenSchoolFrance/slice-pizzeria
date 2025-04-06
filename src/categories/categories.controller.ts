import { Controller, Get, Param } from '@nestjs/common';

import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }
}
