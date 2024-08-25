import * as yup from 'yup';
import { emailPattern, passwordPattern } from './constants';
export const fieldsSchema = yup.object().shape({
	email: yup.string().required().matches(emailPattern, 'Invalid Email address'),
	password: yup
		.string()
		.required()
		.matches(
			passwordPattern,
			'The password must contain at least 1 digit from 0 to 9 and at least one lowercase element.',
		)
		.max(30, 'The password is too long, the password cannot be longer than 30 characters.')
		.min(10, 'The password is too short, the password length cannot be less than 10 characters.'),
	repeatPassword: yup
		.string()
		.required('Repeat password is required field')
		.oneOf([yup.ref('password')], 'Passwords must match!'),
});
