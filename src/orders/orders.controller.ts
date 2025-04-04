import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { CreateOrderDto } from "./orders.dto"
import { OrdersService } from "./orders.service"

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService
    ) {}

    @Get()
    getOrders(): string {
        return this.ordersService.findAll()
    }

    @Get(":id")
    getOrderById(@Param("id") id: string): string {
        return this.ordersService.findOne(id)
    }

    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto) {

        console.log("=========")
        console.log(createOrderDto)
        console.log("=========")

        return this.ordersService.create()
    }
}
