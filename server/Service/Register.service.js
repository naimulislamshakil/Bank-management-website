const REGISER_MODEL = require('../Model/Register.model');

exports.createUserService = async (data) => {
	const user = await REGISER_MODEL.create(data);
	return user;
};
