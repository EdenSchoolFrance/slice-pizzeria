import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Category } from '../categories/categories.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @ManyToOne(() => Category, (category) => category.name)
  category: Category;
}
