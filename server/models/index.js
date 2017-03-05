var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //get messages from db
      var queryString = 'SELECT messages.text, messages.roomname FROM messages';

      db.query(queryString, function (err, results) {
        if (err) {
          throw err;
        }
        console.log('The GET MESSAGE results are: ', results);
        callback(results, err);
      });

    }, // a function which produces all the messages
    post: function (params, callback) {
      //send/ post/ update data to db

      //convert to (a, b, c) format
      var queryString = 'INSERT INTO messages(text, user_id, roomname, created_at) values (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?, ?)';
      console.log(params);
      db.query(queryString, params, function (err, results) {
        if (err) {
          throw err;
        }
        console.log('The POST MESSAGE result are: ', results);
        callback(results, err);
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      //get users from db
      var queryString = 'SELECT username FROM users';

      db.query(queryString, function (err, results) {
        if (err) {
          throw err;
        }
        console.log('The GET USER result are: ', results);
        callback(results, err);
      });
    },
    post: function (params, callback) {
      //send/ post new users to db

      console.log(params);
      var queryString = 'INSERT INTO users(username) values (?)';

      db.query(queryString, params, function (err, results) {
        if (err) {
          throw err;
        }
        console.log('The POST USER result are: ', results);
        callback(results, err);
      });
    }
  }
};

