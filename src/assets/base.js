import axios from 'axios';

const HOST = '/api/';

export function httpGet(url, params, fn) {
	axios.get(HOST + url, params)
		.then((result) => {
		  fn(result);
		});
  	},
}

export function httpPost(url, params, fn) {
	axios.post(HOST + url, params)
		.then((result) => {
		  fn(result);
		});
  	},
}


