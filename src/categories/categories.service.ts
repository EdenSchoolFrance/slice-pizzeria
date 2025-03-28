import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Category } from "./categories.entity"

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async findAll(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    async findOne(id: string): Promise<Category> {
        return this.categoryRepository.findOne({
            where: { id }
        })
    }
}
