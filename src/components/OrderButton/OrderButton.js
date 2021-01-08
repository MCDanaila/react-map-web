import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './OrderButton.css';

export default function OrderButton(props) {
    const [order, setOrder] = useState('');

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        if (order === '') {
            setOrder('asc');
        } else if (order === 'asc') {
            setOrder('desc');
        } else {
            setOrder('');
        }
        props.onClick(event);
    }

    return (
        <Button id={props.column} className='control' variant='outline-secondary' value={props.column.toLowerCase() + (order ? ':' + order : '')} onClick={handleChange}>
            {props.column}  {order ?
                (order === 'asc' ?
                    <i class="fa fa-caret-up" aria-hidden="true" /> :
                    (order === 'desc' ? <i class="fa fa-caret-down" aria-hidden="true" /> : null)
                ) : null}
        </Button>
    );
}