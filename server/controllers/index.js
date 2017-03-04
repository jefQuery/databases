var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //use model callback
      //get messages from model
      models.messages.get(req, res);
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //send/ post new messages to model
      models.messages.post(req, res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //get users from models
      models.users.get(req, res);

    },
    post: function (req, res) {
      //send/ post new users to model
      models.users.post(req, res);

    }
  }
};

