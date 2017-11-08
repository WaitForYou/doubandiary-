<template>
  <div class="filmListWrap">
      fdsafdsaf
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
  methods:{
    filmItemClick(item){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"

.filmListWrap
  padding:0 20px
  .film
    box-sizing: border-box
    width: 100%
    height: 300px
    padding: 10px 20px
    background: #fff
    padding-left: 240px
    .avater
      height: 280px
      width: 200px
      position: absolute
      left: 40px
      filter: blur(4px)
    .rightTab
      padding: 20px
      text-align: left
      color: #596373 
      font-size: 26px
      .year
        color: #cecece
        font-size: 20px
      .rating
        border-top: 1px solid #efefef



</style>
