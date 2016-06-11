var User = require('../models/users.js');
var _ = require('underscore');

module.exports = {
  getUser: function(req, callback) {
    var id = req.body.userID;
    var email = req.body.email;
    var username = req.body.username;

    User.findOne({userID: id}).exec(function(err, foundUser) {
      if (foundUser) {
        console.log('Found the user');
        callback(foundUser);
      } else {
        console.log('User not found, creating user');
        // get information stuff to actually create a newUser
        var newUser = {
          userID: id,
          email: email,
          username: username
        };
        User.create(newUser);
        callback(newUser);
      }
    });
  },
  
  addMealToUser: function(req, callback) {
    var id = req.body.userID;
    var meal = req.body.meal;
    
    User.findOne({userID: id}).exec(function(err, foundUser) {
      foundUser.meals.push(meal);
    });
    
  },
  
  addFriendToUser: function(req, callback) {
    var id = req.body.userID;
    var friend = req.body.friend;
    User.findOne({userID: id}).exec(function(err, foundUser) {
      foundUser.friends.push(friend);
    });
  }
};
