import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import filmList from '@/components/filmList'

Vue.use(Vuex)
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: filmList
    },
    // {
    //   path: '/filmDetail',
    //   component: filmDetail
    // }
  ]
})
