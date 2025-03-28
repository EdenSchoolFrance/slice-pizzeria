import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get()
    getCategories(): string {
        return "Get categories"
    }

    @Get(":id")
    getCategoryById(@Param("id") id: string): string {
        return `Get category id: ${id}`
    }
}
