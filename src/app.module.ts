import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './config/dbConfig';

import { AppController } from './app.controller';
import { MenuController } from './menu/menu.controller';

import { AppService } from './app.service';

import { Menu } from './menu/menu.entity';
import { MenuModule } from './menu/menu.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

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
      entities: [Menu],
      synchronize: true,
    }),
    MenuModule,
  ],
  controllers: [AppController, MenuController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
