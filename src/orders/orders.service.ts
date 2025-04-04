import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { OrderProduct } from "./orderProduct.entity"
import { Order } from "./orders.entity"
import { Product } from "../products/products.entity"


@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,

        @InjectRepository(OrderProduct)
        private readonly orderProductRepository: Repository<OrderProduct>,

        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    findAll(): string {
        return "All"
    }

    findOne(id: string): string {
        return "One"
    }

    create(): string {
        return "Create"
    }
}
