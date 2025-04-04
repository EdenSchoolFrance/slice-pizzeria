import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column
} from "typeorm"

import { Product } from "../products/products.entity"
import { Order } from "./orders.entity"


@Entity()
export class OrderProduct {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Order, (order) => order.products, {
        onDelete: "CASCADE"
    })
    order: Order

    @ManyToOne(() => Product, { eager: true })
    product: Product

    @Column("int")
    quantity: number
}
