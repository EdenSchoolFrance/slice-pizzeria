import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import dbConfig from './config/dbConfig'

import { AppController } from './app.controller';
import { MenuController } from './menu/menu.controller';

import { AppService } from './app.service';

import { Menu } from './menu/menu.entity'
import { MenuService } from './menu/menu.service';


const myDBConfig = dbConfig()


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
        Menu
      ],
      synchronize: true
    })
  ],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService],
})
export class AppModule {}
