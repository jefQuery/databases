var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //use callback for model
      //get messages from model
      models.messages.get(function(results, err) {
        console.log(results);
        if (err) {
          throw err;
        } 
        res.json(results);
      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //send/ post new messages to model
      console.log(req.body);
      var params = [req.body['message'], req.body['username'], req.body['roomname'], new Date()];
      
      models.messages.post(params, function(results, err) {
        if (err) {
          throw err;
        } 
        res.json(results);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //get users from models
      models.users.get(function(results, err) {
        if (err) {
          throw err;
        } 
        res.json(results);
      });

    },
    post: function (req, res) {
      //send/ post new users to model
      console.log(req.body);
      var params = [req.body['username']];
      models.users.post(params, function(results, err) {
        if (err) {
          throw err;
        } 
        res.json(results);
      });
    }
  }
};

