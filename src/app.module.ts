import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import dbConfig from './config/dbConfig'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuController } from './menu/menu.controller';


const myDBConfig = dbConfig()

console.log("=====")
console.log(myDBConfig)
console.log("=====")


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: myDBConfig.host,
      port: myDBConfig.port,
      username: myDBConfig.username,
      password: myDBConfig.password,
      database: myDBConfig.database
    })
  ],
  controllers: [AppController, MenuController],
  providers: [AppService],
})
export class AppModule {}
