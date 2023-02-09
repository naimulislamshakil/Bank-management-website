const RegisterService = require('../Service/Register.service');

exports.createUserCollaction = async (req, res) => {
	try {
		const user = await RegisterService.createUserService(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'User create Successfully.',
			user,
		});
	} catch (error) {
		res.status(200).json({
			status: 'Failed',
			message: 'Data get not successfully.',
		});
	}
};
