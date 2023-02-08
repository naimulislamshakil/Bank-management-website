import * as Yup from 'yup';

export const singInSchema = Yup.object({
	email: Yup.string().email().required('Pleace Enter Your Email'),
	password: Yup.string().min(8).required('Pleace Enter your Password'),
});
