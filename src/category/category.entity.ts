import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Menu } from "../menu/menu.entity"

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Menu, menu => menu.category)
  menus: Menu[]
}
