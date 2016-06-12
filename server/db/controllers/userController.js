var User = require('../models/users.js');
var _ = require('underscore');

module.exports = {
  // Largely a testing function to see all users in the db
  getAll: function(callback) {
    User.find({}).exec(function(err, users) {
      callback(users);
    });
  },
  
  getUser: function(id, callback) {
    User.findOne({userID: id}).exec(function(err, foundUser) {
      if (foundUser) {
        console.log('Found the user');
        callback(foundUser);
      } else {
        console.log('User not found');
      }
    });
  },
  
  // We will use this with a post so we can have the 
  // necessary information to create a user
  checkOrCreateUser: function(id, email, username, callback) {
    User.findOne({userID: id}).exec(function(err, foundUser) {
      if (foundUser) {
        console.log('Found the user');
        callback(foundUser);
      } else {
        console.log('User not found, creating user');
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
  
  addMealToUser: function(id, meal, callback) {
    User.update({userID: id}, {$push: {"meals": meal}}, function(err, foundUser) {
      if (foundUser) {
        callback(foundUser);
      } else {
        console.log('There was an error');
        callback(foundUser);
      }
    });
    
  },
  
  addFriendToUser: function(id, friend, callback) {
    User.update({userID: id}, {$push: {"friends": friend}}, function(err, foundUser) {
      if (foundUser) {
        callback(foundUser);
      } else {
        console.log('There was an error');
        callback(foundUser);
      }
    });
   }
};
