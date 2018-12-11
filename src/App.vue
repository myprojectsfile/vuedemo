<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    appHeader: Header
  },
  created(){
    this.$store.dispatch('initStocks')
  }
};
</script>

<style>
#app {
  font-family: "vazir", "shabnam", "tahoma", "calibri", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  margin-top: 60px;
}
</style>
