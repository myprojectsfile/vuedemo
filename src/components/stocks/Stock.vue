<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{stock.name}}
          <small>(price:{{stock.price}})</small>
        </h5>
        <div class="row d-flex justify-content-center">
          <div class="pull-left">
            <input
              type="number"
              class="form-control form-control-sm"
              placeholder="Quantity"
              v-model="quantity"
            >
          </div>
          <div class="pull-right ml-3">
            <button
              class="btn btn-sm btn-primary"
              @click="buyStock"
              :disabled="quantity<=0"
            >Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
</style>