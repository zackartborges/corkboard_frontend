<template>
  <div class="edit-user-info-menu form-group d-flex justify-content-center">
    <button type="button" class="btn btn-light" v-on:click="showUserInfo(user)">Edit</button>
    <span class="edit-user-info">
      <dialog id="user-details">
        <form method="dialog">
          <h2>My Info</h2>
          <p>
            Name:
            <input type="text" v-model="user.name" />
          </p>
          <p>
            Username:
            <input type="text" v-model="user.username" />
          </p>
          <p>
            Email:
            <input type="email" v-model="user.email" />
          </p>
          <p>
            Bio:
            <input type="text" v-model="user.bio" class="form-control" />
          </p>
          <p>
            Profile Picture:
            <input type="text" v-model="user.image_url" />
          </p>
          <button v-on:click.prevent="updateProfileInfo(user)" data-dismiss="modal">Update</button>
          <button>Close</button>
        </form>
      </dialog>
    </span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      name: "",
      username: "",
      email: "",
      bio: "",
      image_url: "",
      errors: [],
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
    updateProfileInfo: function (user) {
      var params = {
        name: user.name,
        username: user.username,
        email: user.email,
        bio: user.bio,
        image_url: user.image_url,
      };
      axios.patch("api/users/" + user.id, params).then((response) => {
        console.log("Updated Data", response.data);
        this.user = response.data;
      });
    },
    showUserInfo: function (user) {
      console.log(user);
      this.currentUser = user;
      document.querySelector("#user-details").showModal();
    },
  },
};
</script>
