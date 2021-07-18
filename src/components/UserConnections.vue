<template>
  <div class="connection-index">
    <div class="user-info">
      <h1>Your Connections</h1>
      <div v-for="connection in connections" v-bind:key="connection.id">
        {{ connection[0] }}
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
      connections: {},
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
      });
    },
  },
};
</script>
