import React from 'react';
import './OrderButton.css';

const OrderButton = (props) => {
	const [order, setOrder] = React.useState(props.parentOrder);

	function changeOrder(event) {
		console.log("inner changeOrder: ", event.target.value);
		// Here, we invoke the callback with the new value
		/* if(order === 'asc') {
			setOrder('desc');
		} else {
			setOrder('asc');
		} */
		props.onOrderChange(event);
	}

	return (
		<button id={props.field} className='control'
			variant='outline-secondary'
			value={props.field + (order ? ':' + order : '')}
			onClick={changeOrder}>
			{props.text}
			{order === 'asc' ? <i className="fa fa-caret-up" aria-hidden="true" /> :
				order === 'desc' ? <i className="fa fa-caret-down" aria-hidden="true" /> : null}
		</button>
	);
}

export default OrderButton;