import { DataSource } from 'typeorm';

import getDbConfig from '../config/dbConfig';
import { Menu } from '../menu/menu.entity';
import { Category } from '../category/category.entity';

const dbConfig = getDbConfig();
export default new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [Category, Menu],
  synchronize: true,
});
