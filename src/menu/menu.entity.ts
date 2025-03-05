import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Category } from "../category/category.entity"

@Entity()
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @ManyToOne(() => Category, category => category.menus)
  category: Category
}
