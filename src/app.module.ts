import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './config/dbConfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Menu } from './menu/menu.entity';
import { MenuController } from './menu/menu.controller';
import { MenuModule } from './menu/menu.module';

import { Category } from "./category/category.entity"
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';


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
      entities: [
        Category,
        Menu
      ],
      synchronize: true,
    }),
    MenuModule,
    CategoryModule,
  ],
  controllers: [AppController, MenuController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
