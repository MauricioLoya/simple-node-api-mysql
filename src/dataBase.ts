import {createPool, Pool} from 'mysql2/promise'

export const connect = async (): Promise<Pool> => {

    return createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: Number(process.env.DB_PORT),
        connectionLimit:1,
        queueLimit:1
    });
};

