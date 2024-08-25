import { useForm } from 'react-hook-form';
import { InputField } from './components/InputField/InputField';
import './App.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorsList } from './components/ErrorsList/ErrorsList';
import { formClassName } from './constants';
import { fieldsSchema } from './verificationSchemes';
import { mergeClasses } from './services';

const App = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(fieldsSchema),
	});
	const { email = null, password = null, repeatPassword = null } = errors;
	const isErrorExists = () => email || password || repeatPassword;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
			<InputField parentClassName={formClassName} id="email" name="email" validates={register('email')}>
				Enter email
			</InputField>
			<InputField
				parentClassName={formClassName}
				id="password"
				name="password"
				type="password"
				validates={register('password')}
			>
				Enter password
			</InputField>
			<InputField
				parentClassName={formClassName}
				id="repeat-password"
				name="repeatPassword"
				type="password"
				validates={register('repeatPassword')}
			>
				Repeat password
			</InputField>
			{isErrorExists && <ErrorsList errors={errors} />}
			<button className={mergeClasses([formClassName, 'submit-button'], '__')} disabled={isErrorExists()}>
				Register
			</button>
		</form>
	);
};

export default App;
