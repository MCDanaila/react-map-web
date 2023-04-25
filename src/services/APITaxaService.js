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

}

export default new APITaxaService();