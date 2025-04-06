type ProductOrder = {
  uuid: string;
  quantity: string;
};

export class CreateOrderDto {
  products: ProductOrder[];
}
