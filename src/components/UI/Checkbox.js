import React, { useState } from 'react';
import './Checkbox.css';

function Checkbox(props) {
	const [checked, setChecked] = useState(props.isChecked);
	const state = props.value;

	const handleChange = () => {
		setChecked(!checked);
		props.onCheckChange(state);
	};

	return (
		<div className='checkbox_container'>
			<input type="checkbox" id={state} checked={checked} onChange={handleChange}></input>
			<label htmlFor={state}>{props.label}</label>
		</div>
	);

};


export { Checkbox };