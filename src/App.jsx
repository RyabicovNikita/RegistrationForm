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
	const isErrorExists = (name) => errors[name]?.message;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
			<InputField parentClassName={formClassName} id="email" name="email" validates={register('email')}>
				Enter email
			</InputField>
			{isErrorExists('email') && <ErrorsList message={errors['email'].message} />}
			<InputField
				parentClassName={formClassName}
				id="password"
				name="password"
				type="password"
				validates={register('password')}
			>
				Enter password
			</InputField>
			{isErrorExists('password') && <ErrorsList message={errors['password'].message} />}
			<InputField
				parentClassName={formClassName}
				id="repeat-password"
				name="repeatPassword"
				type="password"
				validates={register('repeatPassword')}
			>
				Repeat password
			</InputField>
			{isErrorExists('repeatPassword') && <ErrorsList message={errors['repeatPassword'].message} />}
			<button className={mergeClasses([formClassName, 'submit-button'], '__')} disabled={isErrorExists()}>
				Register
			</button>
		</form>
	);
};

export default App;
