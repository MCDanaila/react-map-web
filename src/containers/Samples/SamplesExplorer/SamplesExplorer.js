import React from 'react';
import './SamplesExplorer.css';

const SamplesExplorer = (props) => {
	const [isActive, setIsActive] = React.useState(false);

	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
				<div>{props.title}</div>
				<div>{isActive ? '-' : '+'}</div>
			</div>
			{isActive && <div className="accordion-content">{props.children}</div>}
		</div>
	);
}

export default SamplesExplorer;