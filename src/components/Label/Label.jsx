export const Label = ({ forInput, className, children }) => {
	return (
		<label className={className} htmlFor={forInput}>
			{children}
		</label>
	);
};
