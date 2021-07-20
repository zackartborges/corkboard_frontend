<template>
  <div class="users-show">
    <div class="user-info">
      <h1>Profile Info:</h1>
      <h3>Name:</h3>
      <p>{{ user.name }}</p>
      <h3>Username:</h3>
      <p>{{ user.username }}</p>
      <h3>Username:</h3>
      <p>{{ user.email }}</p>
      <h3>Bio:</h3>
      <p>{{ user.bio }}</p>
      <h3>Profile Picture</h3>
      <p>{{ user.image_url }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    this.showUser();
  },
  methods: {
    showUser: function () {
      axios.get(`/api/users/${localStorage.getItem("user_id")}`).then((response) => {
        // console.log(this.$route.params.id);
        this.user = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
