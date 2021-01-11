import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import HeyiUI from "heyi/heyi-ui";
import Store from "store";
import Vue from "vue";
import App from "./App.vue";
import Router from "./router";

Vue.use(ElementUI);
Vue.use(HeyiUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: Router,
  store: Store
}).$mount("#app");
