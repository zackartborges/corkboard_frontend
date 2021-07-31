<template>
  <div class="user-connection">
    <div class="user-info">
      <router-link :to="`/users-show/${connection.connection_profile.id}`">
        <div>
          <h1>
            <button type="button" class="btn btn-secondary">Primary</button>

            {{ connection.connection_profile.username }}
          </h1>
          <img id="profile-pic" :src="connection.connection_profile.image_url" />
        </div>
      </router-link>
      <div v-for="message in connection.messages" :key="message.id">
        <p>{{ message.user.username }}</p>
        <p>{{ formatTime(message.sent) }}</p>
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
import ActionCable from "actioncable";
import moment from "moment";

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
      var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
      cable.subscriptions.create("MessagesChannel", {
        connected: () => {
          // Called when the subscription is ready for use on the server
          console.log("Connected to MessagesChannel");
        },
        disconnected: () => {
          // Called when the subscription has been terminated by the server
        },
        received: (data) => {
          // Called when there's incoming data on the websocket for this channel
          console.log("Data from MessagesChannel:", data);
          this.connection.messages.push(data); // update the messages in real time
        },
      });
    });
  },
  methods: {
    messageCreate: function () {
      var params = {
        body: this.newMessageBody,
        connection_id: this.$route.params.id,
      };
      axios.post("/api/messages", params).then((response) => {
        // this.connection.messages.push(response.data);
        console.log(response.data);
        this.newMessageBody = "";
      });
    },
    formatTime: function (time) {
      let message = "";
      let timeSince = moment().diff(time, "hours");
      if (timeSince < 1) {
        timeSince = moment().diff(time, "minutes");
        message = `${timeSince} minutes ago`;
      } else if (timeSince > 24) {
        timeSince = moment().diff(time, "days");
        message = `${timeSince} days ago`;
      } else {
        message = `${timeSince} hours ago`;
      }
      return message;
    },
  },
};
</script>

<style>
#profile-pic {
  width: 20vw;
  border-radius: 50%;
}
</style>
