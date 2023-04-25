import React from 'react';
import PageContent from '../../components/PageContent';
import sampleData200 from '../../assets/samples_data_200.json';
import './Samples.css';

import TablePaginationActions from '../../components/Pagination/TablePaginationActions';
import TablePagination from '@mui/material/TablePagination';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '../../components/UI/Card';
import OrderButton from '../../components/OrderButton/OrderButton';
import APISampleService from '../../services/APISampleService';
import SamplesExplorer from './SamplesExplorer/SamplesExplorer';

const ORDER_COLUMNS = [{ text: 'ID', field: 'sid_sort' },
{ text: 'Name', field: 'name_sort' }];

const SEARCHABLE_FIELDS = [{ text: 'ID', field: 'sid' },
{ text: 'Name', field: 'name' },
{ text: 'Keywords', field: 'keywords_clean' },];


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
	const [rows, setRows] = React.useState([]);
	const [totalHits, setTotalHits] = React.useState(0);
	const [page, setPage] = React.useState(0);
	const [order, setOrder] = React.useState(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
	const [visibleRows, setVisibleRows] = React.useState(null);
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const [filter, setFilter] = React.useState(null);
	const [checkedState, setCheckedState] = React.useState(new Array(SEARCHABLE_FIELDS.length).fill(true));

	const inputFilter = React.useRef('');

	React.useEffect(() => {
		setRows(sampleData200);
		/* APISampleService.getSampleAll(page, rowsPerPage, order, orderBy)
		.then((response) => {
			console.log('DATA from APISampleService: ', response);
			if(response.status === 200) {
				setVisibleRows(response.data);
			} else {
				console.log('DATA from sampleData200: ', sampleData200);
				let rowsOnMount = stableSort(rows, order, orderBy);
				rowsOnMount = rows.slice(
					page * rowsPerPage,
					page * rowsPerPage + rowsPerPage,
				);
				setVisibleRows(rowsOnMount);
			}
		}) */
	}, []);

	React.useEffect(() => {
		const newState = SEARCHABLE_FIELDS.filter((item, index) => checkedState[index]).map(item => item.field)
		console.log(newState);
		APISampleService.getSamplePag(page, rowsPerPage, order, orderBy, filter, newState)
			.then(response => {
				console.log('DATA from getSamplePag: ', response);
				if(response.status === 200) {
					setRows(response.data.result);
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


	function handleOrderChange(event) {
		//console.log("handleOrderChange: ", event.target.value);
		const selectArr = event.target.value.split(':');
		if(orderBy !== selectArr[0])
			setOrderBy(selectArr[0]);
		setOrder(selectArr[1]);
		event.stopPropagation();
	}


	const handleOnChange = (position) => {
		console.log("before change: ", checkedState);
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		console.log("After change: ", updatedCheckedState);
		setCheckedState(updatedCheckedState);
	};

	return (
		<PageContent title='Welcome to Samples !'>
			<SamplesExplorer title="Samples Explorer">
				<div>
					<input type='text' ref={inputFilter} />
					<button onClick={handleFilter}>Filter</button>
				</div>
				<div>
					<h3>Select searchable fields</h3>
					<ul className="toppings-list">
						{SEARCHABLE_FIELDS.map(({ text, field }, index) => {
							return (
								<li key={index}>
									<div className="toppings-list-item">
										<input
											type="checkbox"
											id={`custom-checkbox-${index}`}
											name={text}
											value={field}
											checked={checkedState[index]}
											onChange={() => handleOnChange(index)}
										/>
										<label htmlFor={`custom-checkbox-${index}`}>{text}</label>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</SamplesExplorer>
			<Card >
				<div style={{ display: 'table' }}>
					{ORDER_COLUMNS.map((column, index) =>
						[
							<OrderButton key={column.field + '_asc'} field={column.field} text={column.text} parentOrder='asc' onOrderChange={handleOrderChange} />,
							<OrderButton key={column.field + '_desc'} field={column.field} text={column.text} parentOrder='desc' onOrderChange={handleOrderChange} />
						]
					)}
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
				{visibleRows?.map((row, index) => (
					<ul className='list_card' key={index}>
						<li><b>Sample ID: </b>{row.sid} | <b>Keywords: </b>{row.keywords_clean}</li>
						<li className='dots_hide_text'><b>Name: </b>{row.name}</li>
						<li><b>Run IDs: </b>{row.rids} | <b>Environments: </b>{row.sample_env}</li>
					</ul>
				))}
			</Card>
		</PageContent >
	)
}

export default Samples;