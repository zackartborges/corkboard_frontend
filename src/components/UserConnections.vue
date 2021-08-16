<template>
  <div class="connection-index">
    <div class="searchbar">
      Search for Users:
      <input v-model="userFilter" list="users" />
      <datalist id="users">
        <input v-model="userFilter" />
        <option v-for="user in filterBy(users, userFilter, 'username')" :key="user.id">
          {{ user.username }}
        </option>
      </datalist>
    </div>
    <div class="accepted-user-info text-center">
      <h1>Your Accepted Connections</h1>

      <div v-for="connection in accepted_connections" v-bind:key="connection.id">
        <div class="card text-white mx-auto border-info mb-3" style="max-width: 40rem">
          <router-link :to="`/connections/${connection.id}`">
            <img :src="connection.connected_user.image_url" class="card-img-top" />
          </router-link>
          <div class="card-body d-flex row align-items-center">
            <h3>Username:</h3>
            <p>
              {{ connection.connected_user.username }}
            </p>
            <h3>Location</h3>
            <p>
              {{ connection.connected_user.current_location }}
            </p>
            <h3>bio:</h3>
            <p>
              {{ connection.connected_user.bio }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pending-user-info text-center">
      <h1>Your Pending Connections</h1>
      <div v-for="connection in pending_connections" v-bind:key="connection.id">
        <div class="card text-white mx-auto border-info mb-3" style="max-width: 40rem">
          <router-link :to="`/users-show/${connection.sender.id}`">
            <img :src="connection.sender.image_url" class="card-img-top" />
          </router-link>
          <div class="card-body">
            <h3>Username:</h3>
            <p>
              {{ connection.sender.username }}
            </p>
            <h3>Location</h3>
            <p>
              {{ connection.sender.current_location }}
            </p>
            <h3>bio:</h3>
            <p>
              {{ connection.sender.bio }}
            </p>
            <button v-on:click="handleAccept(connection)">Accept</button>
            <hr />
            <button v-on:click="handleDecline">Decline</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
// import SearchBar from "../components/SearchBar.vue";

export default {
  mixins: [Vue2Filters.mixin],
  components: {
    // SearchBar,
  },
  data: function () {
    return {
      user: {},
      connections: [],
      accepted_connections: [],
      pending_connections: [],
      userFilter: "",
      users: [],
    };
  },
  created: function () {
    this.connectionIndex();
    this.usersIndex();
  },
  methods: {
    // showUser: function () {
    //   axios.get(`/api/users/${localStorage.getItem("user_id")}`).then((response) => {
    //     // console.log(this.$route.params.id);
    //     this.user = response.data;
    //     console.log(response.data);
    //   });
    // },
    usersIndex: function () {
      axios.get(`/api/users`).then((response) => {
        this.users = response.data;
        console.log("your users:", this.users);
      });
      // this.accepted_connections = this.connections.filter((connection) => connection[0]["status"] === 1);
    },
    connectionIndex: function () {
      axios.get(`/api/connections`).then((response) => {
        this.connections = response.data;
        console.log("your connections:", this.connections);
        this.accepted_connections = this.connections["accepted_connections"];
        console.log("accepted connections:", this.accepted_connections);
        this.pending_connections = this.connections["pending_connections"];
        console.log("pending:", this.pending_connections);
      });
      // this.accepted_connections = this.connections.filter((connection) => connection[0]["status"] === 1);
    },
    handleAccept: function (connection) {
      var params = {
        status: 1,
      };
      axios.patch(`/api/connections/${connection.id}`, params).then((response) => {
        console.log(response.data);
        var index = this.pending_connections.indexOf(connection);
        this.pending_connections.splice(index, 1);
        let updatedConnection = {
          connected_user: response.data.connection_profile,
          messages: [],
          status: 1,
        };
        this.accepted_connections.unshift(updatedConnection);
      });
    },
    handleDecline: function (connection) {
      var params = {
        status: -1,
      };
      axios.patch(`/api/connections/${connection.id}`, params).then((response) => {
        console.log(response.data);
        var index = this.pending_connections.indexOf(connection);
        this.pending_connections.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  max-width: 100%;
  height: auto; */
}
.card {
  display: flex;
  justify-content: center;
}
</style>
