import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';

import { OrderProduct } from './orderProduct.entity';
import { User } from "../users/users.entity"

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    cascade: true,
  })
  products: OrderProduct[];

  @ManyToOne(() => User, { eager: true })
  user: User
}
