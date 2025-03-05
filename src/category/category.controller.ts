import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('id')
  async getCategory(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }
}
