<template>
  <div class="home">
    <login-input></login-input>
  </div>
</template>

<script>
import LoginInput from "../components/LoginInput.vue";
// @ is an alias to /src

export default {
  name: "Login",
  components: {
    LoginInput,
  },
};
</script>
