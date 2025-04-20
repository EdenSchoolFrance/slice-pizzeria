import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateOrderDto } from './orders.dto';
import { OrdersService } from './orders.service';
import { Order } from './orders.entity';
import { CurrentUser } from '../users/current-user.decorator';

@Controller('orders')
@UseGuards(AuthGuard('jwt'))
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(@CurrentUser() user: any): Promise<Order[]> {
    return this.ordersService.findAll(user.userId);
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(id);
  }

  @Post()
  async createOrder(
    @Body() dto: CreateOrderDto,
    @CurrentUser() userPayload: any,
  ): Promise<Order> {
    return this.ordersService.create(dto, userPayload.userId);
  }
}
