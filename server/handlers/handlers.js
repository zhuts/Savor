var restaurantController = require('./../db/controllers');

module.exports = {
  getRestaurantsByUser: function(req, res){
    var id = req.params._id;
    restaurantController.fetchAllById(id, function(restaurant) {
      res.status(200).json(restaurant);
    })
  },
  
  getRestaurants:  function(req, res) {
    restaurantController.fetchAll(function(restaurants) {
      res.status(200).json(restaurants);
    });
  },

  getOneRestaurant: function(req, res) {
    //getting the id incorrectly
    var id = req.params._id;
    restaurantController.fetchOne(id, function(restaurant) {
      res.status(200).json(restaurant);
    })
  },

  addRestaurant: function(req, res) {
    console.log("req.body: ", req.body);
    var restaurant = req.body;
    restaurantController.addRestaurantReview(restaurant, function(newRestaurant) {
      res.status(201).json(newRestaurant);
    })
  },

  updateRestaurantInfo: function(req, res) {
    //_.id
    var id = req.params._id;
    var newProperties = req.body;
    restaurantController.updateOne(id, newProperties, function(updatedRestaurant) {
      res.status(200).json(updatedRestaurant);
    })
  },

  deleteRestaurant: function(req, res) {
    var id = req.params._id;
    restaurantController.deleteOne(id, function (deleted) {
      res.status(200).json(deleted);
    })
  }
};

