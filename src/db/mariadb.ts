const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.1.106',
  user: 'root',
  password: '6hkcGdVe',
  database: 'LoanFields'
});

connection.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to the DB');
    throw err;
  }
  console.log('Connected!');
});

// Query example
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
