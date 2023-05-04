import React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SortButtonGroup = ({ sortButtons, callbackHandle }) => {
	const [sorting, setSorting] = React.useState();

	const handleChange = (event, newAlignment) => {
		console.log(event, newAlignment);
		setSorting(newAlignment);
		callbackHandle(newAlignment);
	};

	return (
		<Box sx={{ '& button': { m: 0.5, mb: 0 }, 'marginBottom': 1 }}>
			<ToggleButtonGroup
				size="small"
				color="secondary"
				value={sorting}
				exclusive
				onChange={handleChange}
			>
				{sortButtons.map((column, index) => [
					<ToggleButton key={column.field + ':asc'}
						value={column.field + ':asc'} > {column.text}<ArrowDropUpIcon /></ToggleButton>,
					<ToggleButton key={column.field + ':desc'}
						value={column.field + ':desc'} >{column.text}<ArrowDropDownIcon /></ToggleButton>
				])}

			</ToggleButtonGroup>
		</Box>
	);
}

export default SortButtonGroup;