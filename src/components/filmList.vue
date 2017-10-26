<template>
  <div>
    <ul class="filmList" v-for="item in movie.subjects">
      <li class="film">  
        fsdafd
      </li>
    </ul>
  </div>
</template>

<script>
import {movieInTheaters} from '@/store/httpGet'
import { mapState } from 'vuex'

export default {
  name: 'filmList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      movieMsg:{}
    }
  },
  computed: mapState(
    ['movie']
  ),
  mounted () {
     this.$store.dispatch('LOAD_MOVIE_IN_THEATERS')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.film{
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  background: #fff;
}
</style>
