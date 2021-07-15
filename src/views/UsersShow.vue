<template>
  <div class="users-show">
    <users-show-info></users-show-info>
  </div>
</template>

<script>
import UsersShowInfo from "../components/UsersShowInfo.vue";
// @ is an alias to /src

export default {
  name: "UsersShow",
  components: {
    UsersShowInfo,
  },
};
</script>
