<template>
  <div class="user-connection">
    <div class="user-info">
      <h1>
        {{ connection.connection_profile.username }}
      </h1>
      <div v-for="message in connection.messages" :key="message.id">
        <p>{{ message.user.username }}</p>
        <p>{{ message.sent }}</p>
        <p>{{ message.body }}</p>
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
      connection: {
        connection_profile: {
          username: "",
        },
      },
    };
  },
  created: function () {
    axios.get("/api/connections/1").then((response) => {
      this.connection = { ...response.data };
      console.log(this.connection);
    });
  },
  methods: {},
};
</script>
