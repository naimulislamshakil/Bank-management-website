import * as Yup from 'yup';

export const registerSchema = Yup.object({
	name: Yup.string().min(2).max(25).required('Pleace Enter Your Name.'),
	email: Yup.string().email().required('Pleace Enter Your Email'),
	password: Yup.string().min(8).required('Pleace Enter your Password'),
	repassword: Yup.string()
		.required()
		.oneOf([Yup.ref('password'), null], 'Password Must Match'),
});
