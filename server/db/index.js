var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
}, {
  timestamps: false
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

module.exports.User = User;
module.exports.Message = Message;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".