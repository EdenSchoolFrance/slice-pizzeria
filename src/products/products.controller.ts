import { Controller, Get, Param } from '@nestjs/common';

import { Product } from "./products.entity"
import { ProductsService } from "./products.service"

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ) {}

    @Get()
    async getProducts(): Promise<Product[]> {
        return this.productsService.findAll()
    }

    @Get(":id")
    async getProductById(@Param("id") id: string): Promise<Product> {
        return this.productsService.findOne(id)
    }
}
