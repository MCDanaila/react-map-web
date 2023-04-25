import axios from 'axios';

const SAMPLE_API_REST_URL = "http://127.0.0.1:8081/api/samples/";

class APISampleService {

	async getSampleAll(page, rowsPerPage, order, orderBy) {
		console.log('APISampleService [getSampleAll]: ', [page, rowsPerPage, order, orderBy]);
		const url = SAMPLE_API_REST_URL + `all?page=${page}&size=${rowsPerPage}&orderBy=${orderBy}&order=${order}`;
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		return await axios.get(url, config);
	}

	async getSamplePag(page, rowsPerPage, order, orderBy, filter, checkedState) {
		console.log('APISampleService [getSamplePag]: ', [page, rowsPerPage, order, orderBy, filter, checkedState]);
		const config = {
			method: 'post',
			url: SAMPLE_API_REST_URL,
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

export default new APISampleService();