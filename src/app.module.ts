import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './config/dbConfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Product } from "./products/products.entity"
import { Category } from "./categories/categories.entity"

import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';

import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';

const myDBConfig = dbConfig();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: myDBConfig.host,
      port: myDBConfig.port,
      username: myDBConfig.username,
      password: myDBConfig.password,
      database: myDBConfig.database,
      entities: [Category, Product],
      synchronize: true,
    }),
    ProductsModule,
    CategoriesModule,
    OrdersModule,
  ],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
