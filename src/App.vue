<template>
  <div id="app">
    <img class="bg"src="./img/bg.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg{
  position: absolute;
  top:0;
  left:0;
  z-index: -1;
}
</style>
