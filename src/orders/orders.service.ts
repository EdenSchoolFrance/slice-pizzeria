import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {

    findAll(): string {
        return "All"
    }

    findOne(id: string): string {
        return "One"
    }

    create(): string {
        return "Create"
    }
}
