import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"
import router from "./routes";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
