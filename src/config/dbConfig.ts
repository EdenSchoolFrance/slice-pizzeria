type DBConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

function getConfig() {
  const config: DBConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };

  Object.keys(config).forEach((obj) => {
    if (!config[obj]) {
      throw new Error(`Invalid DB Config: ${obj} is missing`);
    }
  });

  return config;
}

export default getConfig;
