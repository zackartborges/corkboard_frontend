<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span v-if="isLoggedIn()">
        |
        <router-link :to="`/users-show/${getUserId()}`">My Profile</router-link>
        |
        <router-link to="/connections">Your Connections</router-link>
        |
        <router-link to="/users">Find Friends!</router-link>
        |
        <router-link to="/logout">Logout</router-link>
      </span>
      <span v-else>
        |
        <router-link to="/signup">Signup</router-link>
        |
        <router-link to="/login">Login</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// import moment from "moment";
// import axios from "axios";
export default {
  data: function () {
    return {
      flashMessage: "",
      mutual: true,
    };
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
