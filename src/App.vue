<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Cork Board</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link" to="/connections"
                >Connections
              </router-link>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link :to="`/users-show/${getUserId()}`" class="nav-link"
                >My Profile</router-link
              >
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link to="/users" class="nav-link" href="#"
                >Find Friends</router-link
              >
            </li>
            <li v-if="isLoggedIn()" class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Creators</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="https://github.com/zackartborges"
                  >Zack Borges</a
                >
                <a class="dropdown-item" href="https://github.com/winstonbarbe"
                  >Winston Barbe</a
                >
              </div>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link to="/logout" class="nav-link">Logout</router-link>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <router-link to="/signup" class="nav-link">Signup</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* h1 {
  color: red;
}
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
} */
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
