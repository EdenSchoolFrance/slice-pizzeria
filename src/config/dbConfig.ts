type DBConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

function getConfig() {
  const config: DBConfig = {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME ?? 'admin',
    password: process.env.DB_PASSWORD ?? 'toto90',
    database: process.env.DB_DATABASE ?? 'slice-pizzeria',
  };

  Object.keys(config).forEach((obj) => {
    if (!config[obj]) {
      throw new Error(`Invalid DB Config: ${obj} is missing`);
    }
  });

  return config;
}

export default getConfig;
