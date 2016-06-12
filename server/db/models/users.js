var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	userID: {
		type: String,
		default: '',
		unique: true,
	},
	userAvatar: {
		type: String,
		default: '',
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
		type: Array
	},
	friends: {
		type: Array
	}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
