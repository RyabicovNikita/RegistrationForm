import styles from './ErrorsList.module.scss';

export const ErrorsList = ({ errors }) => {
	const errorValues = Object.values(errors);
	return (
		<ol className={styles['errors-list']}>
			{errorValues.map((error, index) => (
				<li key={index} className={styles['errors-list__error']}>
					{error.message}
				</li>
			))}
		</ol>
	);
};
