import React from 'react';
import PageContent from '../../containers/PageContent/PageContent';
import sampleData200 from '../../assets/samples_data_200.json';
import './Samples.css';
import '../../App.css';

import TablePaginationActions from '../../components/Pagination/TablePaginationActions';
import TablePagination from '@mui/material/TablePagination';

import OrderButton from '../../components/OrderButton/OrderButton';
import APISampleService from '../../services/APISampleService';
import { ORDER_COLUMNS, SEARCHABLE_FIELDS, EXPLORER_CHECKBOXES } from './Variables';
import SampleRow from './SampleRow/SampleRow';
import { Checkbox } from '../../components/UI/Checkbox';
import { Box, Button, Grid, Input } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import ExplorerContainer from '../../containers/ExplorerContatiner/ExplorerContainer';
import LeafletMapContainer from '../../containers/LeafletMapContainer/LeafletMapContainer';
import Introduction from '../../components/Introduction/Introduction';

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'sid_sort';
const DEFAULT_ROWS_PER_PAGE = 5;

function stableSort(array, order, orderBy) {
	return array.sort((a, b) => {
		if(order === 'asc') {
			return (a[orderBy] > b[orderBy]) ? 1 : ((a[orderBy] === b[orderBy]) ? ((a.num_samples > b.num_samples) ? 1 : -1) : -1);
		} else {
			return a[orderBy] > b[orderBy] ? -1 : ((a[orderBy] === b[orderBy]) ? ((a.num_samples > b.num_samples) ? -1 : 1) : 1);
		}
	});
}

const Samples = () => {
	const [rows, setRows] = React.useState(sampleData200);
	const [totalHits, setTotalHits] = React.useState(0);
	const [page, setPage] = React.useState(0);
	const [order, setOrder] = React.useState(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
	const [visibleRows, setVisibleRows] = React.useState(null);
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const [filter, setFilter] = React.useState(null);
	const [checkedState, setCheckedState] = React.useState(new Array(SEARCHABLE_FIELDS.length).fill(true));
	const [markers, setMarkers] = React.useState([]);
	const [filterChecks, setFilterChecks] = React.useState({});

	const inputFilter = React.useRef('');

	React.useEffect(() => {
		let initCheckboxesState = {};
		EXPLORER_CHECKBOXES.map(section => section.content.map(content => initCheckboxesState[content.value] = content.initState));
		setFilterChecks(initCheckboxesState);
		/*const newState = SEARCHABLE_FIELDS.filter((item, index) => checkedState[index]).map(item => item.field)
					APISampleService.getLocations(filter, newState)
					.then(response => {
						console.log('DATA from [getLocations]: ', response);
						if(response.status === 200) {
							setMarkers(response.data);
						}
					})
					.catch(error => {
						const initMarkers = response.data.result.filter(s => (s.lat !== 0) || (s.lon !== 0)).map(s => [s.lat, s.lon, s.sid]);
						setMarkers(initMarkers);
					}); */
	}, []);

	React.useEffect(() => {
		const newState = SEARCHABLE_FIELDS.filter((item, index) => checkedState[index]).map(item => item.field)
		//console.log(newState);
		APISampleService.getSamplePag(page, rowsPerPage, order, orderBy, filter, newState, filterChecks)
			.then(response => {
				console.log('DATA from getSamplePag: ', response);
				if(response.status === 200) {
					//setRows(response.data.result);
					setVisibleRows(response.data.result);
					setTotalHits(response.data.totalHits);
				}
			})
			.catch(error => {
				console.log(error);
				console.log('DATA from sampleData200: ', sampleData200);
				let rowsOnMount = stableSort(rows, order, orderBy);
				rowsOnMount = rows.slice(
					page * rowsPerPage,
					page * rowsPerPage + rowsPerPage,
				);
				setVisibleRows(rowsOnMount);
			});

	}, [page, rowsPerPage, order, orderBy, filter, checkedState]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		event.stopPropagation()
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleFilter = () => {
		console.log(inputFilter.current.value);
		setFilter(inputFilter.current.value);
	};

	function handleOrderChange(sortValue) {
		//console.log("handleOrderChange: ", event.target.value);
		const selectArr = sortValue.split(':');
		if(orderBy !== selectArr[0])
			setOrderBy(selectArr[0]);
		setOrder(selectArr[1]);
	}

	const handleOnChange = (position) => {
		console.log("before change: ", checkedState);
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		console.log("After change: ", updatedCheckedState);
		setCheckedState(updatedCheckedState);
	};

	const handleCheckChange = (stateChecked) => {
		console.log('handleCheckChange :', stateChecked);
		filterChecks[stateChecked] = !filterChecks[stateChecked];
		/* let newLikings = "";
		for(var check in filterChecks) {
			if(filterChecks[check]) {
				newLikings += check + " ";
			}
		}
		setLikings(newLikings); */
	};

	return (
		<React.Fragment>
			<Introduction />
			{/* <LeafletMapContainer markers={markers} /> */}
			<ExplorerContainer title="Samples Explorer">
				<Grid item xs={12}>
					<Input type='text' inputRef={inputFilter} />
					<Button variant='outlined' onClick={handleFilter}>Filter</Button>
				</Grid>
				{EXPLORER_CHECKBOXES.map(section => (
					<Grid item lg={2} md={3} xs={6}>
						<div className='col' style={{ textAlign: 'left' }}>
							<h4>{section.title}</h4>
							{section.content.map(content => <Checkbox key={content.value} value={content.value} label={content.label} isChecked={content.initState} onCheckChange={handleCheckChange} />)}
						</div>
					</Grid>
				))}
				<Grid item lg={2} md={3} xs={6}>
					<div className='col' style={{ textAlign: 'left' }}>
						<h4>Select searchable fields</h4>
						{SEARCHABLE_FIELDS.map(({ text, field }, index) => <Checkbox key={`custom-checkbox-${index}`} value={field} label={text} isChecked={checkedState[index]} onCheckChange={() => handleOnChange(index)} />)}
					</div>
				</Grid>
			</ExplorerContainer>
			<div style={{ display: 'flex', placeContent: 'space-between' }}>
				<Box sx={{ '& button': { mr: 0.5, ml: 0.5 }, 'marginBottom': 1 }}>
					{ORDER_COLUMNS.map((column, index) =>
						<ButtonGroup orientation="vertical">
							<OrderButton key={column.field + '_asc'} field={column.field} text={column.text} parentOrder='asc' onOrderChange={handleOrderChange} />
							<OrderButton key={column.field + '_desc'} field={column.field} text={column.text} parentOrder='desc' onOrderChange={handleOrderChange} />
						</ButtonGroup>
					)}
				</Box>
				<TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
					colSpan={3}
					count={totalHits}
					rowsPerPage={rowsPerPage}
					page={page}
					SelectProps={{ inputProps: { 'aria-label': 'Samples per page' }, native: true }}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
					ActionsComponent={TablePaginationActions}
				/>
			</div>
			<div style={{ height: '60vh', overflow: 'scroll' }}>
				{visibleRows?.map((row, index) => (
					<SampleRow key={row.sample_id} row={row} ></SampleRow>
				))}
			</div>
		</React.Fragment >
	)
}

export default Samples;