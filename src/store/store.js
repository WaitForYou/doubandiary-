import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex)

const HOST = '/api/';

const store = new Vuex.Store({
	state:{
		movie:{}
	},
	actions:{
		LOAD_MOVIE_IN_THEATERS: function ({ commit }) {
		  axios.get(HOST + 'movie/in_theaters', { 'city': '广州' })
		  .then((response) => {
		  	  console.log(response.data)
		      commit('SET_MOVIE_LIST',{ moviesMsg: response.data })
		  });
		}
	},
	mutations:{
		SET_MOVIE_LIST: function(state, {moviesMsg}){
			state.movie = moviesMsg;
		}
	},
	getters:{

	}
})

export default store

