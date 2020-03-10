import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"
import router from "./routes";
import store from "./store";
import auth from "./utils/auth"
import http from "./utils/http"


Vue.config.productionTip = false;
Vue.prototype.$auth = auth;
Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
