<template>
  <div class="user-list">
    <div v-for="user in users" v-bind:key="user.id">
      {{ user.profile_picture }}
      Name:
      {{ user.name }}
      <br />
      Username:
      {{ user.username }}
      <br />
      <button v-on:click="connectionRequest(user)">Send Friend Request</button>
      <hr />
    </div>
  </div>
</template>

<script>
// import Vue2Filters from "vue2-filters";
import axios from "axios";

export default {
  // mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      users: [],
    };
  },
  created: function () {
    this.usersIndex();
  },
  methods: {
    usersIndex: function () {
      axios.get(`/api/users`).then((response) => {
        this.users = response.data;
        console.log("your users:", this.users);
      });
      // this.accepted_connections = this.connections.filter((connection) => connection[0]["status"] === 1);
    },
    connectionRequest: function (user) {
      console.log("Sending Request");
      var params = {
        // sender_id: current_user.id,
        recipient_id: user.id,
      };
      axios.post("api/connections", params);
    },
  },
};
</script>
