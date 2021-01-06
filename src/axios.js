import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://devel2.microbeatlas.org/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// instance.defaults.headers.post['Content-Type'] = 'application/json';
//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.common['Content-Type'] = 'application/json';
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// instance.interceptors.request...

export default instance;