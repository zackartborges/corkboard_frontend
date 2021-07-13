<template>
  <div class="users-information">Profile Info:</div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      errors: [],
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
      // item_weight.reduce(function (a, b) {
      //   return a + b;
      // }, 0);
    },

    // submit: function () {
    //   var params = {
    //     name: this.name,
    //     email: this.email,`
    //     username: this.username,
    //     image_url: this.imageUrl,
    //     current_location: this.currentLocation,
    //     bio: this.bio,
    //     password: this.password,
    //     password_confirmation: this.passwordConfirmation,
    //   };
    //   axios
    //     .post("/api/users", params)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.$router.push("/login");
    //     })
    //     .catch((error) => {
    //       this.errors = error.response.data.errors;
    //     });
    // },
  },
};
</script>
