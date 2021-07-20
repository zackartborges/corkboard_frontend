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
      <form v-on:submit.prevent="messageCreate()">
        <textarea v-model="newMessageBody" cols="30" rows="10"></textarea>
        <input type="submit" />
      </form>
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
      newMessageBody: "",
    };
  },
  created: function () {
    axios.get(`/api/connections/${this.$route.params.id}`).then((response) => {
      this.connection = { ...response.data };
      console.log(this.connection);
    });
  },
  methods: {
    messageCreate: function () {
      var params = {
        body: this.newMessageBody,
        connection_id: this.$route.params.id,
      };
      console.log(params);
      axios.post("/api/messages", params).then((response) => {
        this.connection.messages.push(response.data);
        console.log(response.data);
      });
    },
  },
};
</script>
