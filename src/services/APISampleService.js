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

	async getSamplePag(page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks) {
		console.log('APISampleService [getSamplePag]: ', [page, rowsPerPage, order, orderBy, filter, checkedState, filterChecks]);
		const config = {
			method: 'post',
			url: SAMPLE_API_REST_URL,
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

	async getLocations(filter, checkedState) {
		console.log('APISampleService [getLocations]: ', [filter, checkedState]);
		const config = {
			method: 'post',
			url: SAMPLE_API_REST_URL + 'locations',
			data: {
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