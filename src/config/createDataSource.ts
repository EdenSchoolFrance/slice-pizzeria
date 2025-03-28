import { DataSource } from 'typeorm';

import getDbConfig from '../config/dbConfig';

import { Product } from "../products/products.entity"
import { Category } from "../categories/categories.entity"


const dbConfig = getDbConfig();
export default new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [Category, Product],
  synchronize: true,
});
