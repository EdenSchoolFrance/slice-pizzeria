import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from './orders.service';
import { OrderProduct } from './orderProduct.entity';
import { Order } from './orders.entity';
import { Product } from '../products/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct, Order, Product])],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
