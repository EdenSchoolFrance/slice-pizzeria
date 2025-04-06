import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrderProduct } from './orderProduct.entity';
import { Order } from './orders.entity';
import { Product } from '../products/products.entity';
import { CreateOrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['products', 'products.product'],
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['products', 'product.product'],
    });
  }

  async create(dto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create({
      username: dto.username,
      email: dto.email,
    });

    const savedOrder = await this.orderRepository.save(order);

    const orderProducts: OrderProduct[] = [];
    for (const item of dto.products) {
      const product = await this.productRepository.findOneBy({
        id: item.uuid,
      });
      if (!product) {
        throw new Error(`Product with id ${item.uuid} not found`);
      }

      const orderProduct = this.orderProductRepository.create({
        product,
        quantity: parseInt(item.quantity),
        order: savedOrder,
      });

      orderProducts.push(orderProduct);
    }

    await this.orderProductRepository.save(orderProducts);

    const completedOrder = await this.orderRepository.findOne({
      where: { id: savedOrder.id },
      relations: ['products', 'products.product'],
    });
    return completedOrder;
  }
}
