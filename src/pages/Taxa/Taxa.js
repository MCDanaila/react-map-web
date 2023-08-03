import React from 'react';
import PageContent from '../../containers/PageContent/PageContent';
import taxaData200 from '../../assets/taxa_data_200.json';
import './Taxa.css';
import TablePaginationActions from '../../components/Pagination/TablePaginationActions';
import TablePagination from '@mui/material/TablePagination';
import OrderButton from '../../components/OrderButton/OrderButton';
import axios from 'axios';
import APITaxaService from '../../services/APITaxaService';
import { ORDER_COLUMNS, SEARCHABLE_FIELDS, EXPLORER_CHECKBOXES } from './Variables';
import TaxaRow from './TaxaRow/TaxaRow';
import { Box, Grid, Input, ButtonGroup, Button } from '@mui/material';
import { Checkbox } from '../../components/UI/Checkbox';
import ExplorerContainer from '../../containers/ExplorerContatiner/ExplorerContainer';

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'num_samples';
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

const Taxa = () => {
	const [rows, setRows] = React.useState(taxaData200);
	const [totalHits, setTotalHits] = React.useState(0);
	const [page, setPage] = React.useState(0);
	const [order, setOrder] = React.useState(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
	const [visibleRows, setVisibleRows] = React.useState(null);
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const [filter, setFilter] = React.useState(null);
	const [checkedState, setCheckedState] = React.useState(new Array(SEARCHABLE_FIELDS.length).fill(true));
	const [filterChecks, setFilterChecks] = React.useState({});

	const inputFilter = React.useRef('');

	React.useEffect(() => {
		let initCheckboxesState = {};
		EXPLORER_CHECKBOXES.map(section => section.content.map(content => initCheckboxesState[content.value] = content.initState));
		setFilterChecks(initCheckboxesState);
	}, []);

	React.useEffect(() => {
		const newState = SEARCHABLE_FIELDS.filter((item, index) => checkedState[index]).map(item => item.field)
		//console.log(newState);
		APITaxaService.getTaxaPag(page, rowsPerPage, order, orderBy, filter, newState, filterChecks)
			.then(response => {
				console.log('DATA from getTaxaPag: ', response);
				if(response.status === 200) {
					setRows(response.data.result);
					setVisibleRows(response.data.result);
					setTotalHits(response.data.totalHits);
				}
			})
			.catch(error => {
				console.log(error);
				console.log('Loading mocked DATA from taxaData200: ', taxaData200);
				let rowsOnMount = stableSort(rows, order, orderBy);
				rowsOnMount = rows.slice(
					page * rowsPerPage,
					page * rowsPerPage + rowsPerPage,
				);
				setVisibleRows(rowsOnMount);
			});
	}, [page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleFilter = () => {
		//console.log(inputFilter.current.value);
		setFilter(inputFilter.current.value);
	};

	function handleSortChange(sortValue) {
		//console.log("handleOrderChange: ", event.target.value);
		const selectArr = sortValue.split(':');
		if(orderBy !== selectArr[0])
			setOrderBy(selectArr[0]);
		setOrder(selectArr[1]);
	}

	const handleOnChange = (position) => {
		//console.log("before change: ", checkedState);
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		console.log("After change: ", updatedCheckedState);
		setCheckedState(updatedCheckedState);
	};

	const handleCheckChange = (stateChecked) => {
		var filterChecksCopy = { ...filterChecks }
		filterChecksCopy[stateChecked] = !filterChecks[stateChecked];
		setFilterChecks(filterChecksCopy);
	}

	return (
		<PageContent title='Welcome to Taxa Page !'>
			<ExplorerContainer title="Taxa Explorer">
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
					{ORDER_COLUMNS.map((column, index) => [
						<ButtonGroup orientation="vertical">
							<OrderButton key={column.field + ':asc'} field={column.field} text={column.text} parentOrder='asc' onOrderChange={handleSortChange} />
							<OrderButton key={column.field + ':desc'} field={column.field} text={column.text} parentOrder='desc' onOrderChange={handleSortChange} />
						</ButtonGroup>
					])}
				</Box>

				{/* <SortButtonGroup sortButtons={ORDER_COLUMNS} callbackHandle={handleSortChange} ></SortButtonGroup> */}

				<TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
					colSpan={3}
					count={totalHits}
					rowsPerPage={rowsPerPage}
					page={page}
					SelectProps={{ inputProps: { 'aria-label': 'Taxa per page' }, native: true }}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
					ActionsComponent={TablePaginationActions}
				/>
			</div>
			<div >
				{visibleRows?.map((row, index) =>
					<TaxaRow key={row.taxon_id} row={row} ></TaxaRow>
				)}
			</div>
		</PageContent >
	)
}

export default Taxa;