import React from 'react';
import PageContent from '../../components/PageContent';
import taxaData200 from '../../assets/taxa_data_200.json';
import './About.css';
import TablePaginationActions from '../../components/Pagination/TablePaginationActions';
import TablePagination from '@mui/material/TablePagination';
import Card from '../../components/UI/Card';
import OrderButton from '../../components/OrderButton/OrderButton';
import axios from 'axios';
import APITaxaService from '../../services/APITaxaService';

const DUMMY_ROWS = [{
	"num_samples": 167166,
	"level": 97,
	"priority": 0,
	"taxonomy_detail": 3,
	"taxa_name": "B16S;90_4;96_8;97_8",
	"taxonomy": "Bacteria;Firmicutes;Bacilli",
}, {
	"num_samples": 593870,
	"level": 97,
	"priority": 1,
	"taxonomy_detail": 5,
	"taxa_name": "B16S;90_7;96_7;97_7",
	"taxonomy": "Bacteria;Proteobacteria;Gammaproteobacteria;Enterobacterales;Enterobacteriaceae",
}, {
	"num_samples": 356397,
	"level": 97,
	"priority": 0,
	"taxonomy_detail": 7,
	"taxa_name": "B16S;90_27;96_97;97_102",
	"taxonomy": "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Bacteroidaceae;Bacteroides;Bacteroides uniformis",
}, {
	"num_samples": 133713,
	"level": 97,
	"priority": 1,
	"taxonomy_detail": 6,
	"taxa_name": "B16S;90_26;96_276;97_1573",
	"taxonomy": "Bacteria;Proteobacteria;Alphaproteobacteria;Sphingomonadales;Erythrobacteraceae;Porphyrobacter",
}
]

const ORDER_COLUMNS = [{ text: 'ID', field: 'short_tid' },
{ text: 'Name', field: 'taxa_name' },
{ text: 'Taxonomy', field: 'taxonomy' },
{ text: '# Samples', field: 'num_samples' },
{ text: 'Tax Detail', field: 'taxonomy_detail' },];

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

const About = () => {
	const [rows, setRows] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [order, setOrder] = React.useState(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
	const [visibleRows, setVisibleRows] = React.useState(null);
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const inputFilter = React.useRef('');

	React.useEffect(() => {
		setRows(taxaData200);
		//console.log('1# useEffect: ', rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
	}, []);

	React.useEffect(() => {
		//console.log('2# useEffect: ', [page, rowsPerPage, order, orderBy]);
		APITaxaService.getTaxaAll(page, rowsPerPage, order, orderBy).then((response) => {
			console.log('DATA from APITaxaService: ', response);
			if(response.status === 200) {
				setVisibleRows(response.data);
			} else {
				console.log('DATA from taxaData200: ', taxaData200);
				let rowsOnMount = stableSort(rows, order, orderBy);
				rowsOnMount = rows.slice(
					page * rowsPerPage,
					page * rowsPerPage + rowsPerPage,
				);
				//console.log('rowsOnMount: ', rowsOnMount);
				setVisibleRows(rowsOnMount);
			}
		});
	}, [page, rowsPerPage, order, orderBy]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleSelectChange = (event) => {
		const selectArr = event.target.value.split(':');
		setOrder(selectArr[1]);
		setOrderBy(selectArr[0]);
	};

	const onOrderClick = event => {
		console.log("Order by " + event.target.value);
	}

	const handleFilter = (event) => {
		console.log(inputFilter.current.value);
		//inputFilter.current.value = '';
		visibleRows.filter(row => row.taxonomy.includes(inputFilter.current.value));
		console.log(visibleRows);
	};

	function handleOrderChange(event) {
		console.log("handleOrderChange: ", event.target.value);
		const selectArr = event.target.value.split(':');
		if(orderBy !== selectArr[0])
			setOrderBy(selectArr[0]);
		setOrder(selectArr[1]);
		event.stopPropagation();
	}

	return (
		<PageContent title='Welcome to About !'>
			<Card style={{ display: 'block' }}>
				<input type='text' ref={inputFilter} />
				{ORDER_COLUMNS.map((column, index) => [
					<OrderButton key={column.field + '_asc'} field={column.field} text={column.text} parentOrder='asc' onOrderChange={handleOrderChange} />,
					<OrderButton key={column.field + '_desc'} field={column.field} text={column.text} parentOrder='desc' onOrderChange={handleOrderChange} />
				]
				)}

				<button onClick={handleFilter}>Filter</button>

				<TablePagination rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
					colSpan={3}
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					SelectProps={{ inputProps: { 'aria-label': 'rows per page' }, native: true }}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
					ActionsComponent={TablePaginationActions}
				/>
			</Card>
			<Card >
				{visibleRows?.map((row, index) => (
					<ul className='list_card' key={index}>
						<li><b>ID: </b>{row.short_tid} | <b>Taxa: </b>{row.taxa_name} | <b>Level: </b>{row.level}</li>
						<li className='dots_hide_text'><b>Taxonomy: </b>{row.taxonomy}</li>
						<li><b># Samples: </b>{row.num_samples} | <b>Taxonomy Detail: </b>{row.taxonomy_detail}</li>
					</ul>
				))}
			</Card>
		</PageContent >
	)
}

export default About;