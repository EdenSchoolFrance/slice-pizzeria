import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Product } from "./products.entity"

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    findAll(): string {
        return "Get all products"
    }

    findOne(id: string): string {
        return `Get One product: ${id}`
    }
}
