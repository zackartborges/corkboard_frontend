<template>
  <div class="signup">
    <signup-input></signup-input>
  </div>
</template>

<script>
import SignupInput from "../components/SignupInput.vue";
// @ is an alias to /src

export default {
  name: "Signup",
  components: {
    SignupInput,
  },
};
</script>
