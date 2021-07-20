import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import UsersShow from "../views/UsersShow.vue";
import Logout from "../views/Logout.vue";
import ConnectionsIndex from "../views/ConnectionsIndex.vue";
import ConnectionsShow from "../views/ConnectionsShow.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users-show/:id",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/connections",
    name: "connections-index",
    component: ConnectionsIndex,
  },
  {
    path: "/connections/:id",
    name: "connections-show",
    component: ConnectionsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
