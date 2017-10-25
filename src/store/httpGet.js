import axios from 'axios';

const HOST = '/api/';

function movieInTheaters(fn) {
  axios.get(HOST + 'movie/in_theaters', { 'city': '广州' })
  .then((result) => {
      fn(result);
  });
}

export{
	movieInTheaters
}