<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <!-- Blocks out Bio, current location,profile photo until backend create method is altered -->
      <!-- <div class="form-group"> -->
      <!-- ideally user would be able to choose profile picture through device -->
      <!-- <input type="file" class="form-control" /> would allow for this, but does that work?-->
      <!-- <label>Profile Photo:</label>
        <input type="text" class="form-control" v-model="imageUrl" />
      </div>
      <div class="form-group">
        <label>Bio:</label>
        <input type="text" class="form-control" v-model="bio" />
      </div>
      <div class="form-group">
        <label>Current Location:</label>
        <input type="text" class="form-control" v-model="currentLocation" />
      </div> -->
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
// when creating user, image_url bio and current location null for
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      username: "",
      bio: "",
      imageUrl: "",
      currentLocation: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        username: this.username,
        image_url: this.imageUrl,
        current_location: this.currentLocation,
        bio: this.bio,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
