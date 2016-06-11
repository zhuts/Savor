var User = require('../models/users.js');
var _ = require('underscore');

module.exports = {
  getUser: function(req, callback) {
    var id = req.params.id;
    var email = req.body.email;
    console.log(req.body);
    User.findOne({userID: id}).exec(function(err, foundUser) {
      if (foundUser) {
        console.log('Found the user');
        callback(foundUser);
      } else {
        console.log('User not found, creating user');
        // get information stuff to actually create a newUser
        var newUser = {
          userID: id,
          email: email
        };
        User.create(newUser);
        callback(newUser);
      }
    });
  },
  
  addMealToUser: function(req, callback) {
    var id = req.params.id;
    var email = req.body.email;
    // var meal = 
    // req.body something to get the meal information in the right format
    User.findOne({userID: id}).exec(function(err, foundUser) {
      foundUser.meals.push(meal);
    });
    
  },
  
  addFriendToUser: function(req, callback) {
    var id = req.params.id;
    var email = req.body.email;
    // var friend = 
    // req.body something to get the meal information in the right format
    User.findOne({userID: id}).exec(function(err, foundUser) {
      foundUser.friends.push(friend);
    });
  }
};
