<template>
  <div class="users-show">Profile Info:</div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      // -
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
