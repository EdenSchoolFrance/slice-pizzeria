import { Controller, Get, Param } from '@nestjs/common';

import { ProductsService } from "./products.service"

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ) {}

    @Get()
    getProducts(): string {
        return this.productsService.findAll()
    }

    @Get(":id")
    getProductById(@Param("id") id: string): string {
        return this.productsService.findOne(id)
    }
}
