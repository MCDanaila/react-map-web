import React from 'react';
import './OrderButton.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';

const OrderButton = (props) => {
	const [order, setOrder] = React.useState(props.parentOrder);
	const valueOrder = props.field + ':' + order

	function changeOrder() {
		// Here, we invoke the callback with the new value
		/* if(order === 'asc') {
			setOrder('desc');
		} else {
			setOrder('asc');
		} */
		props.onOrderChange(valueOrder);
	}

	return (
		<Button style={{ backgroundColor: 'white' }} id={props.field} size='small'
			color='secondary'
			variant='outlined'
			value={props.field + (order ? ':' + order : '')}
			onClick={() => props.onOrderChange(valueOrder)}>
			{props.text}
			{order === 'asc' ? <ArrowDropUpIcon /> :
				order === 'desc' ? <ArrowDropDownIcon /> : null}
		</Button>
	);
}

export default OrderButton;