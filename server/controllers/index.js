var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      //use callback for model
      db.Message.findAll({ include: [db.User] })
        .then(function(results, err) {
          if (err) {
            throw err;
          } 
          res.json(results);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //send/ post new messages to model
      db.User.findOrCreate({ where: { username: req.body['username'] } })
        .then(function(user, err) {
          if (err) {
            throw err;
          } 
          var params = {text: req.body['message'], userid: user.id, roomname: req.body['roomname']};
          db.Message.findOrCreate({where: params})
            .then(function(results, err) {
              if (err) {
                throw err;
              } 
              res.sendStatus(201);
            });

        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //get users from models
      db.User.findAll()
        .then(function(results, err) {
          if (err) {
            throw err;
          } 
          res.json(results);
        });
    },
    post: function (req, res) {
      //send/ post new users to model
      var params = {username: req.body['username']};
      db.User.findOrCreate({ where: params})
        .then(function(results, err) {
          if (err) {
            throw err;
          } 
          res.sendStatus(201);
        });
    }
  }
};

