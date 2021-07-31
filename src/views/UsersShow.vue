<template>
  <div class="users-show">
    <users-show-info></users-show-info>
    <edit-user-info-menu
      v-if="$parent.getUserId() == $route.params.id"
    ></edit-user-info-menu>
  </div>
</template>

<script>
import UsersShowInfo from "../components/User/UsersShowInfo.vue";
import EditUserInfoMenu from "../components/User/EditUserInfoMenu.vue";
// @ is an alias to /src

export default {
  name: "UsersShow",
  components: {
    UsersShowInfo,
    EditUserInfoMenu,
  },
};
</script>
