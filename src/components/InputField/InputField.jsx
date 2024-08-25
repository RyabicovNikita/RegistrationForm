import styled from 'styled-components';
import { Label } from '../Label/Label';
import { mergeClasses } from '../../services';

const Input = styled.input`
	background-color: black;
	color: white;
	font-family: 'Permanent Marker';
	border-radius: 7px;
`;

export const InputField = ({ id, name, parentClassName, validates, type = 'text', children }) => {
	return (
		<>
			<Label className={`custom-label ${mergeClasses([parentClassName, id + '-label'], '__')}`} forInput={id}>
				{children}
			</Label>
			<Input
				className={`custom-input ${mergeClasses([parentClassName, id + '-input'], '__')}`}
				id={id}
				name={name}
				type={type}
				{...validates}
			/>
		</>
	);
};
