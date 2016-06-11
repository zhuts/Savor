var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	userID: {
		type: String,
		default: '',
		unique: true,
	},
	username: {
		type: String,
		default: '',
		unique: true
	},
	email: {
		type: String,
		default: '',
	},
	meals: {
		type: Array,
		default: []
	},
	friends: {
		type: Array,
		default: []
	}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
