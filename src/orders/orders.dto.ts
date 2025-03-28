type ProductOrder = {
    uuid: string
    quantity: string
}

export class CreateOrderDto {
    username: string
    email: string
    products: ProductOrder[]
}
