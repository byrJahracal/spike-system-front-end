import { setToken } from "network/localStorage.js";
import { charge, getItems, loginReq } from "network/user.js";
import { removeToken } from "../network/localStorage";

const state = {
  role: "",
  username: null,
  balance: 0,
  items: []
};

const getters = {
  isLogged: state => {
    if (["consumer", "seller"].indexOf(state.role) != -1) {
      return true;
    } else {
      return false;
    }
  }
};

const mutations = {
  setBalance(state, balance) {
    state.balance = balance;
  }
};

const actions = {
  async login(context, user) {
    await loginReq(user)
      .then(res => {
        if (res.result != undefined) {
          if (res.result) {
            setToken(res.token);
            context.state.role = res.role;
            context.state.username = res.username;
            context.state.balance = res.balance;
          } else {
            context.state.role = "false";
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
  logout(context) {
    context.state.role = "";
    context.state.username = null;
    context.state.balance = 0;
    context.state.items = [];
    removeToken();
  },
  getItems(context) {
    getItems()
      .then(res => {
        context.state.items = res.items;
      })
      .catch(err => {
        console.error(err);
      });
  },
  async charge(context, amount) {
    let result;
    await charge(amount).then(res => {
      if (res.result) {
        context.state.balance = res.balance;
      }
      result = res;
    });
    return new Promise(resolve => {
      resolve(result);
    });
  }
};

const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default user;
