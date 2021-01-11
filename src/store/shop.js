import { getItems } from "network/shop.js";

const state = {
  items: []
};

const getters = {};

const mutations = {};

const actions = {
  getItems(context, theme) {
    getItems(theme)
      .then(res => {
        context.state.items = res.items;
      })
      .catch(err => {
        console.error(err);
      });
  }
};

const shop = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default shop;
