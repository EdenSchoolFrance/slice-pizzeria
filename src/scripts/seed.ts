import { PRODUCTS } from '../data/productsData';
import { Product } from '../products/products.entity';

import dataSource from '../config/createDataSource';

async function seedProducts() {
  const productsRepository = dataSource.getRepository(Product);

  const productsCount = await productsRepository.count();

  if (productsCount > 0) {
    console.log('There are already products in the database');
    await dataSource.destroy();

    return;
  }

  console.log('Starting to seed products inside the database...');

  const productsToInsert = PRODUCTS.map((product) =>
    productsRepository.create({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    }),
  );
  await productsRepository.save(productsToInsert);

  console.log('Successfully inserted products!');
}

async function seedDatabase() {
  await dataSource.initialize();
  console.log('Successfully connected to database');

  await seedProducts();

  console.log('Database has been seeded, bye!');
}

seedDatabase().catch((err) =>
  console.log(`An error occured when seed the database: ${err}`),
);
