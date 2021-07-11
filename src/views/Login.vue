<template>
  <div class="home">
    <login-input></login-input>
  </div>
</template>

<script>
import LoginInput from "../components/LoginInput.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    LoginInput,
  },
};
</script>
