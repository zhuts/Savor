var mongoose = require('mongoose');

var restSchema = new mongoose.Schema({
  // meals: [mealSchema],
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
 })

// var mealSchema = new mongoose.Schema({});

var userSchema = new mongoose.Schema({
	username: {
		type: String,
		default: ''
	},
	email: {
		type: String,
		default: ''
	},
	hashedPassword: {
		type: String,
		default: ''
	},

})

module.exports = mongoose.model("Restaurant", restSchema);
module.exports = mongoose.model('User', userSchema);
