import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import taxaData200 from '../../assets/taxa_data_200.json';

function descendingComparator(a, b, orderBy) {
	if(b[orderBy] < a[orderBy]) {
		return -1;
	}
	if(b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if(order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{
		id: 'taxa_name',
		numeric: false,
		disablePadding: true,
		label: 'taxa_name',
	},
	{
		id: 'taxonomy',
		numeric: false,
		disablePadding: false,
		label: 'taxonomy',
	},
	{
		id: 'level',
		numeric: true,
		disablePadding: false,
		label: 'level',
	},
	{
		id: 'priority',
		numeric: true,
		disablePadding: false,
		label: 'priority',
	},
	{
		id: 'num_samples',
		numeric: true,
		disablePadding: false,
		label: 'num_samples',
	},
];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'calories';
const DEFAULT_ROWS_PER_PAGE = 5;

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } =
		props;
	const createSortHandler = (newOrderBy) => (event) => {
		onRequestSort(event, newOrderBy);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
	const [rows, setRows] = React.useState([]);
	const [order, setOrder] = React.useState(DEFAULT_ORDER);
	const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [visibleRows, setVisibleRows] = React.useState(null);
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
	const [paddingHeight, setPaddingHeight] = React.useState(0);

	React.useEffect(() => {
		setRows(taxaData200);
	}, []);

	React.useEffect(() => {
		let rowsOnMount = stableSort(
			rows,
			getComparator(order, orderBy),
		);

		rowsOnMount = rowsOnMount.slice(
			page * rowsPerPage,
			page * rowsPerPage + rowsPerPage,
		);
		console.log(rowsOnMount);
		setVisibleRows(rowsOnMount);
	}, [page, rowsPerPage]);

	const handleRequestSort = React.useCallback(
		(event, newOrderBy) => {
			const isAsc = orderBy === newOrderBy && order === 'asc';
			const toggledOrder = isAsc ? 'desc' : 'asc';
			setOrder(toggledOrder);
			setOrderBy(newOrderBy);

			const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
			const updatedRows = sortedRows.slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage,
			);

			setVisibleRows(updatedRows);
		},
		[order, orderBy, page, rowsPerPage],
	);

	const handleSelectAllClick = (event) => {
		if(event.target.checked) {
			const newSelected = rows.map((n) => n.name);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if(selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if(selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if(selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if(selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = React.useCallback(
		(event, newPage) => {
			setPage(newPage);

			const sortedRows = stableSort(rows, getComparator(order, orderBy));
			const updatedRows = sortedRows.slice(
				newPage * rowsPerPage,
				newPage * rowsPerPage + rowsPerPage,
			);

			setVisibleRows(updatedRows);

			// Avoid a layout jump when reaching the last page with empty rows.
			const numEmptyRows =
				newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

			const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
			setPaddingHeight(newPaddingHeight);
		},
		[order, orderBy, dense, rowsPerPage],
	);

	const handleChangeRowsPerPage = React.useCallback(
		(event) => {
			const updatedRowsPerPage = parseInt(event.target.value, 10);
			setRowsPerPage(updatedRowsPerPage);

			setPage(0);

			const sortedRows = stableSort(rows, getComparator(order, orderBy));
			const updatedRows = sortedRows.slice(
				0 * updatedRowsPerPage,
				0 * updatedRowsPerPage + updatedRowsPerPage,
			);

			setVisibleRows(updatedRows);

			// There is no layout jump to handle on the first page.
			setPaddingHeight(0);
		},
		[order, orderBy],
	);

	const handleChangeDense = (event) => {
		setDense(event.target.checked);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '99%', m: 'auto' }}>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
							key='Head_id_1'
						/>
						<TableBody>
							{visibleRows
								? visibleRows.map((row, index) => {
									const isItemSelected = isSelected(row.taxa_name);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.taxa_name)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.taxa_name}
											selected={isItemSelected}
											sx={{ cursor: 'pointer' }}
										>
											<TableCell
												component="th"
												id={labelId}
												scope="row"
												padding="none"
											>
												{row.taxa_name}
											</TableCell>
											<TableCell align="right">{row.taxonomy}</TableCell>
											<TableCell align="right">{row.level}</TableCell>
											<TableCell align="right">{row.priority}</TableCell>
											<TableCell align="right">{row.num_samples}</TableCell>
										</TableRow>
									);
								})
								: null}
							{paddingHeight > 0 && (
								<TableRow
									style={{
										height: paddingHeight,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel
				control={<Switch checked={dense} onChange={handleChangeDense} />}
				label="Dense padding"
			/>
		</Box>
	);
}