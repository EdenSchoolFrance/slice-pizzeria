type DBConfig = {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

function getConfig() {
    const config: DBConfig = {
        host: process.env.HOST,
        port: 5432,
        username: 'admin',
        password: 'toto90',
        database: 'slice-pizzeria'
    }

    Object.keys(config).forEach(obj => {
        if (!obj) {

            console.log("++++")
            console.log("++++")
            console.log("++++")

            throw new Error(`Invalid DB Config: ${obj} is missing`)
        }
    })

    return config
}

export default getConfig
