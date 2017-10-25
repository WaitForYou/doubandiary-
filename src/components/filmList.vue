<template>
  <div class="filmList">
    <ul v-for="item in movieMsg.subjects">
      <li>  
        fsdafd
      </li>
    </ul>
  </div>
</template>

<script>
import {movieInTheaters} from '@/store/httpGet';

export default {
  name: 'filmList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      movieMsg:{}
    }
  },
  mounted () {
    let that = this;
    movieInTheaters(function(res){
      that.movieMsg = res.data;
      console.log(that.movieMsg)
    });
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
</style>
