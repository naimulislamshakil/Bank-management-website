const mongoose = require('mongoose');

const registerScema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minLength: [2, 'Name shout be at least 5 letter.'],
			maxLength: [100, 'Name is too large.'],
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: [true, 'Email shout be unique.'],
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const REGISER_MODEL = mongoose.model('User', registerScema);
module.exports = REGISER_MODEL;
