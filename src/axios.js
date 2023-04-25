import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://mdevel.microbeatlas.org/'
});
//http://127.0.0.1:8082/api/taxa/

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// instance.interceptors.request...

export default instance;