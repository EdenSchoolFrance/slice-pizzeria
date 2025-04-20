import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrderProduct } from './orderProduct.entity';
import { Order } from './orders.entity';
import { Product } from '../products/products.entity';
import { CreateOrderDto } from './orders.dto';
import { User } from '../users/users.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(userId: string): Promise<Order[]> {
    return this.orderRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
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

  async create(dto: CreateOrderDto, userId: string): Promise<Order> {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new Error('User not found');
    }

    const order = this.orderRepository.create({
      user: user,
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
      relations: ['products', 'products.product', 'user'],
    });
    return completedOrder;
  }
}
