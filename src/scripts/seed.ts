import { CATEGORIES } from '../data/categoriesData';
import { PRODUCTS } from '../data/productsData';
import { Product } from '../products/products.entity';
import { Category } from "../categories/categories.entity"

import dataSource from '../config/createDataSource';


async function seedCategories() {
  const categoriesRespository = dataSource.getRepository(Category)

  const categoriesCount = await categoriesRespository.count()

  if (categoriesCount > 0) {
    console.log('There are already categories in the database');
    await dataSource.destroy();

    return;
  }

  console.log("Starting to seed categories inside the database...")

  const categoriesToInsert = CATEGORIES.map(category => categoriesRespository.create({
    id: category.id,
    name: category.name,
    description: category.description
  }))
  await categoriesRespository.save(categoriesToInsert)

  console.log("Successfully inserted categories!")
}


async function seedProducts() {
  const productsRepository = dataSource.getRepository(Product);
  const categoriesRespository = dataSource.getRepository(Category)

  const productsCount = await productsRepository.count();

  if (productsCount > 0) {
    console.log('There are already products in the database');
    await dataSource.destroy();

    return;
  }

  console.log('Starting to seed products inside the database...');

  const pizzaCategory = await categoriesRespository.findOneBy({
    name: "pizza"
  })

  const productsToInsert = PRODUCTS.map((product) =>
    productsRepository.create({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: pizzaCategory
    }),
  );
  await productsRepository.save(productsToInsert);

  console.log('Successfully inserted products!');
}

async function seedDatabase() {
  await dataSource.initialize();
  console.log('Successfully connected to database');

  await seedCategories()
  await seedProducts();

  console.log('Database has been seeded, bye!');
}

seedDatabase().catch((err) =>
  console.log(`An error occured when seed the database: ${err}`),
);
