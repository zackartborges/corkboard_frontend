<template>
  <div class="user-list d-flex row align-items-center">
    <div v-for="user in users" v-bind:key="user.id">
      <div class="card text-white mx-auto border-info mb-3" style="max-width: 40rem">
        <div class="card-header">Name: {{ user.name }}</div>
        <div class="card-body">
          <!-- <h4 class="card-title">Info card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->

          <br />
          <img :src="user.image_url" style="width: 400px" />
          <br />
          Name:

          <br />
          Username:
          {{ user.username }}
          <br />
          Location:
          {{ user.current_location }}
          <br />
          Bio:
          {{ user.bio }}
          <br />
          <button v-on:click="connectionRequest(user)">Send Friend Request</button>
        </div>
        <hr />
      </div>
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
      axios.post("api/connections", params).then((response) => {
        var index = this.users.indexOf(user);
        console.log(index);
        this.users.splice(index, 1);
        console.log(response.data);
      });
    },
  },
};
</script>
