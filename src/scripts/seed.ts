import { DataSource } from 'typeorm';

import dbConfig from '../config/dbConfig';
import { Menu } from '../menu/menu.entity';
import { Pizza } from '../menu/menu.type';
import { PIZZE } from "../data/pizzaData"

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

  const menuRepository = dataSource.getRepository(Menu)

  const count = await menuRepository.count()

  if (count > 0) {
    console.log("There are already data in the database.")

    return
  }

  console.log("Starting seeding data...")

  const pizzeToInsert = PIZZE.map(pizza => menuRepository.create({
    name: pizza.name,
    description: pizza.description,
    price: pizza.price
  }))
  await menuRepository.save(pizzeToInsert)
}

seedDatabase().catch((err) =>
  console.log(`An error occured when seeding the dabase: ${err}`),
);
