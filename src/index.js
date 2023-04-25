import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import 'fontsource-roboto';

/* axios.interceptors.request.use(request => {
	console.log('interceptors.request: ', request);
	// Edit request config
	return request;
}, error => {
	console.log('interceptors.request error:', error);
	return Promise.reject(error);
});

axios.interceptors.response.use(response => {
	console.log('axios.interceptors.response: ', response);
	// Edit request config
	return response;
}, error => {
	console.log('axios.interceptors.response error: ', error);
	return Promise.reject(error);
}); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

