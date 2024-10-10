import mysql from 'mysql2';

export const createConnection = () => {
    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    })

    return connection;
}