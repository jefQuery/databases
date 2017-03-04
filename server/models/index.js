var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      //get messages from db
      var queryString = 'SELECT * FROM messages;';

      db.query(queryString, function (error, results, fields) {
        if (error) {
          throw error;
        }
        console.log('The results are: ', results);
        res.json(results);
      });

      db.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      //send/ post/ update data to db
      var value = req.body; //convert to (a, b) format
      console.log(value);
      var queryString = 'INSERT INTO messages (text, user_id, room_id, created_at) values ("banana", 1, 1, null);';
      
      db.query(queryString, function (error, results, fields) {
        if (error) {
          throw error;
        }
        console.log('The solution is: ', results[0].solution);
        res.json(results);
      });

      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      //get users from db
      var queryString = 'SELECT * FROM users;';

      db.query(queryString, function (error, results, fields) {
        if (error) {
          throw error;
        }
        console.log('The solution is: ', results[0].solution);
        res.json(results);
      });


      db.end();
    },
    post: function (req, res) {
      //send/ post new users to db
      var columnName = '*';
      var value = req.body;
      console.log(value);
      var queryString = 'INSERT INTO users (name) values "Valjean";';

      db.query(queryString, function (error, results, fields) {
        if (error) {
          throw error;
        }
        console.log('The solution is: ', results[0].solution);
        res.json(results);
      });

      db.end();
    }
  }
};

