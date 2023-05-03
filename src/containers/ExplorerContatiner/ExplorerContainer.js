import React from 'react';
import './ExplorerContainer.css';
import '../../App.css';
import { Box, Grid } from '@mui/material';

const ExplorerContainer = (props) => {
	const [isActive, setIsActive] = React.useState(false);

	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
				<div>{props.title}</div>
				<div>{isActive ? '-' : '+'}</div>
			</div>
			{isActive && <Box sx={{ width: '100%' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{props.children}
				</Grid>
			</Box>}
		</div>
	);
}

export default ExplorerContainer;