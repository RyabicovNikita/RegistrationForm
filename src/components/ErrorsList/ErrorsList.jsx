import styles from './ErrorsList.module.scss';

export const ErrorsList = ({ message }) => {
	return <p className={styles.error}>{message}</p>;
};
