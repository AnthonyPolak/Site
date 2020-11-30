const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const connection = mysql.createConnection({
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'ecommerce',
  Promise: bluebird,
  namedPlaceholders: true
});


module.exports = connection