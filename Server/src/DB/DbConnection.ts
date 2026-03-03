import mysql, { Pool, PoolOptions } from "mysql2/promise";


let pool: Pool;

function getPool(): Pool {
    if (!pool) {
        const config: PoolOptions = {
            host: process.env.DB_CONNECTION_STRING, // hostname only
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT,  10) : undefined,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            ssl: { rejectUnauthorized: false }
        }
        pool = mysql.createPool(config);
    }
    return pool;
}

// Use query in repository layers
export async function query<T>(sql: string, params?: any[]): Promise<T> {
    const [rows] = await getPool().execute(sql, params);
    return rows as T;
}