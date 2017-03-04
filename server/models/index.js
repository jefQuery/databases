var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      //get messages from db
      var queryString = 'SELECT * FROM messages';

      db.connect();

      db.query(); ///queryString, //function (error, results, fields) {
        //   if (error) throw error;
        //   console.log('The solution is: ', results[0].solution);
        // });
        //res.json(results);

      db.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      //send/ post/ update data to db
      var columnName = '*'; //convert to (a, b) format, ID AUTO-updates
      var value = JSON.stringify(res.body); //convert to (a, b) format
      var queryString = 'INSERT INTO messages SET' + columnName + ' ' + value;

      db.connect();
      
      db.query(); ///queryString, //function (error, results, fields) {
        //   if (error) throw error;
        //   console.log('The solution is: ', results[0].solution);
        // });
        //res.json(results);

      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      //get users from db
      var queryString = 'SELECT * FROM users';

      db.connect();

      db.query(); ///queryString, //function (error, results, fields) {
        //   if (error) throw error;
        //   console.log('The solution is: ', results[0].solution);
        // });
        //res.json(results);


      db.end();
    },
    post: function (req, res) {
      //send/ post new users to db
      var columnName = '*';
      var value = JSON.stringify(res.body);
      var queryString = 'INSERT INTO users ' + columnName + ' ' + value;

      db.connect();

      db.query(); //queryString, function (error, results, fields) {
        //   if (error) throw error;
        //   console.log('The solution is: ', results[0].solution);
        // });
        //res.json(results);

      db.end();
    }
  }
};

