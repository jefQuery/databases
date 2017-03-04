var mysql = require('mysql');
var chatDB = require('../schema.sql'); //???


var connection = mysql.createConnection({
  host: 'localhost', //127.0.0.1
  port: 3000,
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


