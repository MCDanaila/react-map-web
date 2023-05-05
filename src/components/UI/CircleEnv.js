import React from "react";
import './CircleEnv.css';

const CircleEnv = props => {
	return <div className={'circle ' + props.env} />;
}

export default CircleEnv;