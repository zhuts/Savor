var mongoose = require('mongoose');

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

});
module.exports = mongoose.model('User', userSchema);
