import { getMenu } from "network/common.js";
import Vue from "vue";
import Vuex from "vuex";
import manage from "./manage.js";
import shop from "./shop.js";
import user from "./user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: new Map(),
    currentMenu: null
  },
  getters: {},
  mutations: {},
  actions: {
    async getMenu(context, theme) {
      if (context.state.menu[theme]) {
        context.state.currentMenu = context.state.menu[theme];
      }
      await getMenu(theme)
        .then(res => {
          if (res.menu != "none") {
            context.state.menu.set(theme, res.menu);
            context.state.currentMenu = res.menu;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  modules: {
    User: user,
    Shop: shop,
    Manage: manage
  }
});
