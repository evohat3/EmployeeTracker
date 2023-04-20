const mysql = require('mysql2/promise');
require('dotenv').config();


const password = process.env.PASSWORD

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'crusader_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }

  console.log('Connected to database as id ' + connection.threadId);
});

module.exports = connection;