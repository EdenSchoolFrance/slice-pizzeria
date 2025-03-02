import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Menu {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column("decimal", { precision: 5, scale: 2 })
    price: number
}
