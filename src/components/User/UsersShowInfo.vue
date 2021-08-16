<template>
  <div class="users-show d-flex justify-content-center">
    <div class="card mb-4 ml-5 w-50 users-info">
      <h3 class="card-header">Profile Info:</h3>
      <div class="card-body">
        <h4 class="card-subtitle text-muted">Name:</h4>
        <p v-if="!user.name">...</p>
        <p v-else>{{ user.name }}</p>
        <h4 class="card-subtitle text-muted">Username:</h4>
        <p v-if="!user.username">...</p>
        <p v-else>{{ user.username }}</p>
        <h4 class="card-subtitle text-muted">Username:</h4>
        <p v-if="!user.email">...</p>
        <p v-else>{{ user.email }}</p>
        <h4 class="card-subtitle text-muted">Bio:</h4>
        <p v-if="!user.bio">...</p>
        <p v-else>{{ user.bio }}</p>
        <h4 class="card-subtitle text-muted">Profile Picture</h4>
        <img
          :src="user.image_url"
          class="d-block user-select-none"
          width="100%"
          height="200"
          aria-label="Placeholder: Image cap"
          focusable="false"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 318 180"
          style="font-size: 1.125rem; text-anchor: middle"
        />
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
    };
  },
  created: function () {
    this.showUser();
  },
  methods: {
    showUser: function () {
      axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
        this.user = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
