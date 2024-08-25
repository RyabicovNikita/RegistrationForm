export const mergeClasses = (classes, separator = ' ') => {
	if (classes?.length === 0) return '';
	let className = '';
	classes.forEach((item) => {
		className.length ? (className = className + separator + item) : (className = item);
	});
	return className;
};
