import axios from 'axios';

const TAXA_API_REST_URL = "http://127.0.0.1:8082/api/taxa/";

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

	async getTaxaPag(page, rowsPerPage, order, orderBy, filter, checkedState) {
		console.log('APITaxaService [getTaxaPag]: ', [page, rowsPerPage, order, orderBy, filter, checkedState]);
		const config = {
			method: 'post',
			url: TAXA_API_REST_URL,
			data: {
				page: page,
				size: rowsPerPage,
				sortBy: orderBy,
				sort: order,
				text: filter ? filter : null,
				fields: checkedState
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