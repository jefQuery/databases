var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //get messages from db
      var queryString = 'SELECT m.id, m.text, m.roomname FROM messages m LEFT OUTER JOIN users u ON (m.user_id=u.id) ORDER BY m.id desc';

      db.query(queryString, function (err, results) {
        if (err) {
          throw err;
        }
        callback(results, err);
      });

    }, // a function which produces all the messages
    post: function (params, callback) {
      //send/ post/ update data to db
      //convert to (a, b, c) format
      var queryString = 'INSERT INTO messages(text, user_id, roomname, created_at) values (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?, ?)';
      db.query(queryString, params, function (err, results) {
        if (err) {
          throw err;
        }
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
        callback(results, err);
      });
    },
    post: function (params, callback) {
      //send/ post new users to db
      var queryString = 'INSERT INTO users(username) values (?)';

      db.query(queryString, params, function (err, results) {
        if (err) {
          throw err;
        }
        callback(results, err);
      });
    }
  }
};

