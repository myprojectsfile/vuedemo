<template>
  <div id="app">
    <Header/>
    <Home style="font-size:9.5pt;"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'vazir','shabnam','tahoma','calibri', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  margin-top: 60px;
}
</style>
