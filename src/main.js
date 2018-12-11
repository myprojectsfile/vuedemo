import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {
  routes
} from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store/store';

Vue.config.productionTip = false

Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')