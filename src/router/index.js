import store from "store";
import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("views/login");
const Manage = () => import("views/manage");
const User = () => import("views/user");
const Shop = () => import("views/shop");

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/login",
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requireAuth: false
    }
  },
  {
    path: "/user",
    name: "user",
    component: User,
    meta: {
      requireAuth: true,
      requireRole: ["consumer", "seller"]
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
    meta: {
      requireAuth: true,
      requireRole: ["consumer"]
    }
  },
  {
    path: "/manage",
    name: "manage",
    component: Manage,
    meta: {
      requireAuth: true,
      requireRole: ["seller"]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({
      name: "login"
    });
  }
  if (to.meta.requireAuth) {
    if (store.getters["User/isLogged"]) {
      if (to.meta.requireRole.indexOf(store.state.User.role) != -1) {
        console.log("咋回事");
        next();
      } else {
        switch (store.state.User.role) {
          case "consumer": {
            next({
              name: "shop"
            });
            break;
          }
          case "seller": {
            console.log("咋回事");
            next({
              name: "manage"
            });
            break;
          }
          default: {
            next({
              name: "login"
            });
          }
        }
      }
    } else {
      next({
        name: "login"
      });
    }
  } else {
    next();
  }
});

export default router;
