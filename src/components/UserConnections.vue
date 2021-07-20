<template>
  <div class="user-connections">
    <div class="user-info">
      <h1>Your Accepted Connections</h1>
      <div
        v-for="connection in accepted_connections"
        v-bind:key="connection.id"
      >
        <h3>Username:</h3>
        {{ connection.connected_user.username }}
        <h3>Location</h3>
        {{ connection.connected_user.current_location }}
        <h3>bio:</h3>
        {{ connection.connected_user.bio }}
        <hr />
      </div>
      <h1>Your Pending Connections</h1>
      <div v-for="connection in pending_connections" v-bind:key="connection.id">
        <h3>Username:</h3>
        {{ connection.sender.username }}
        <h3>Location</h3>
        {{ connection.sender.current_location }}
        <h3>bio:</h3>
        {{ connection.sender.bio }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      connections: [],
      accepted_connections: [],
      pending_connections: [],
    };
  },
  created: function () {
    this.connectionIndex();
  },
  methods: {
    // showUser: function () {
    //   axios.get(`/api/users/${localStorage.getItem("user_id")}`).then((response) => {
    //     // console.log(this.$route.params.id);
    //     this.user = response.data;
    //     console.log(response.data);
    //   });
    // },
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
  },
};
</script>
