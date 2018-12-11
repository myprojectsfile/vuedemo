<template>
  <div>
    <div class="row mt-3">
      <app-stock
        class="col-sm-6 col-md-4 mb-2"
        v-for="(stock,index) in stocks"
        :key="index"
        :stock="stock"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style scoped>
</style>