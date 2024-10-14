import { createPool } from 'mysql'

const connection = createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

connection.getConnection((error) => {
    if (!error) {
        console.log('Database Connection Successful :)')
    } else {
        console.log('Database Connection Failed :(' + error)
    }
})

export default connection;