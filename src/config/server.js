// server.js
import express from 'express';
import { createConnection } from 'mysql2';
require('dotenv').config();
const app = express();


// Create a MySQL connection
const connection = createConnection({
    host: 'localhost', 
    user: 'root',
    password: '', 
    database: 'quotebuilder',
});

// Define a route to get data
app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM quotebuilder', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        console.log(results);
        res.json(results);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
