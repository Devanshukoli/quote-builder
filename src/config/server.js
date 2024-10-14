// server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost', // Your MySQL host
    user: 'root', // Your MySQL username
    password: 'password', // Your MySQL password
    database: 'your_database_name', // Your MySQL database name
});

// Define a route to get data
app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM quotebuilder', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
