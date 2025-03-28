import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { CreateOrderDto } from "./orders.dto"

@Controller('orders')
export class OrdersController {

    @Get()
    getOrders(): string {
        return "Hello orders!"
    }

    @Get(":id")
    getOrderById(@Param("id") id: string): string {
        return `Hello orderId ${id}`
    }

    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto) {

        console.log("=========")
        console.log(createOrderDto)
        console.log("=========")

        return "Creating new order"
    }
}
