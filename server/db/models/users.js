var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	userID: {
		type: String,
		default: '',
		unique: true,
		required: true
	},
	username: {
		type: String,
		default: '',
		unique: true
		// required: true
	},
	email: {
		type: String,
		default: '',
		unique: true,
		required: true
	},
	meals: {
		type: Array
	},
	friends: {
		type: Array
	}
});
module.exports = mongoose.model('User', userSchema);
