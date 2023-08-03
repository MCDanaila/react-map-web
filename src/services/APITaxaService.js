import axios from 'axios';

//const TAXA_API_REST_URL = "http://127.0.0.1:8082/api/taxa/";
const TAXA_API_REST_URL = "http://127.0.0.1:5000/api/taxa/all";

class APITaxaService {

	getTaxaAll(page, rowsPerPage, order, orderBy) {
		console.log('APITaxaService: ', [page, rowsPerPage, order, orderBy]);
		const url = TAXA_API_REST_URL + `all?page=${page}&size=${rowsPerPage}&orderBy=${orderBy}&order=${order}`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		return axios.get(url, config);
		/* .then(response => {
			console.log('Axios response: ', response);
			return response.data;
		})
		.catch(error => {
			console.log('Axios Error: ', error);
			return error;
		}); */
	}

	async getTaxaPag(page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks) {
		console.log('APITaxaService [getTaxaPag]: ', [page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks]);
		const config = {
			method: 'post',
			url: TAXA_API_REST_URL,
			data: {
				pagination: {
					page: page,
					size: rowsPerPage,
					sortBy: orderBy,
					sort: order
				},
				text: filter ? filter : null,
				fields: checkedState,
				filterChecks: filterChecks
			},
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		return await axios(config);
	}
}

export default new APITaxaService();