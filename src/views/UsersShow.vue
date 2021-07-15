<template>
  <div class="users-show">
    <users-profile-info></users-profile-info>
  </div>
</template>

<script>
import UsersProfileInfo from "../components/UsersProfileInfo.vue";
// @ is an alias to /src

export default {
  name: "UsersProfile",
  components: {
    UsersProfileInfo,
  },
};
</script>
