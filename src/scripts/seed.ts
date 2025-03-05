import { Menu } from '../menu/menu.entity';
import { PIZZE } from '../data/pizzaData';

import { Category } from '../category/category.entity';
import { CATEGORIES } from '../data/categoriesData';

import dataSource from '../config/createDataSource';

async function seedCategories() {
  const categoryRepository = dataSource.getRepository(Category);

  const count = await categoryRepository.count();

  if (count > 0) {
    console.log('Categories are already there in the database');
    await dataSource.destroy();

    return;
  }

  console.log('Starting to seed categories in the database...');

  const categoriesToInsert = CATEGORIES.map((category) =>
    categoryRepository.create({
      name: category.name,
      description: category.description,
    }),
  );
  await categoryRepository.save(categoriesToInsert);

  console.log('Successfully inserted categories.');
}

async function seedPizza() {
  const menuRepository = dataSource.getRepository(Menu);

  const count = await menuRepository.count();

  if (count > 0) {
    console.log('Pizza are already there in the database');
    await dataSource.destroy();

    return;
  }

  console.log('Starting to seed pizza in the database...');

  const pizzeToInsert = PIZZE.map((pizza) =>
    menuRepository.create({
      name: pizza.name,
      description: pizza.description,
      price: pizza.price,
    }),
  );
  await menuRepository.save(pizzeToInsert);

  console.log('Successfuly inserting 🍕');
}

async function seedDatabase() {
  await dataSource.initialize();
  console.log('Database connexion works!');

  await seedCategories();
  await seedPizza();

  console.log('Successfully inserted all data. Good bye!');
  await dataSource.destroy();
}

seedDatabase().catch((err) =>
  console.log(`An error occured when seeding the dabase: ${err}`),
);
