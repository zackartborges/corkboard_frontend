<template>
  <div class="users-information">Profile Info:</div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      // -
    };
  },
  methods: {
    submit: function () {
      var params = {
        //  -
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
