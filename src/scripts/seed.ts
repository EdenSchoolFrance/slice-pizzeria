import { DataSource } from 'typeorm';

import dbConfig from '../config/dbConfig';
import { Menu } from '../menu/menu.entity';
import { Pizza } from '../menu/menu.type';

const config = dbConfig();

const dataSource = new DataSource({
  type: 'postgres',
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database,
  entities: [Menu],
  synchronize: true,
});

async function seedDatabase() {
  await dataSource.initialize();

  console.log('Database connexion works!');
}

seedDatabase().catch((err) =>
  console.log(`An error occured when seeding the dabase: ${err}`),
);
