var mongoose = require('mongoose');

var restSchema = new mongoose.Schema({
  // meals: [mealSchema],
  userEmail: {
    type: String,
    default: ''
  },
  restaurantName: {
		type: String,
		default: ''
	},
	date: {
		type: Date,
		default: Date.now
	},
  restaurantAddress: {
		type: String,
		default: ''
	},
  priceRating: {
		type: Number,
		default: ''
	},
  serviceRating: {
		type: Number,
		default: ''
	},
  foodRating: {
		type: Number,
		default: ''
	},
  ambienceRating: {
		type: Number,
		default: ''
	},
  restaurantReview: {
		type: String,
		default: ''
	},
  image: {
		type: String,
		default: ''
	},
 });

// var mealSchema = new mongoose.Schema({});

module.exports = mongoose.model("Restaurant", restSchema);