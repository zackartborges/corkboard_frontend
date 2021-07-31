<template>
  <div class="user-index">
    <users-list></users-list>
  </div>
</template>

<script>
import UsersList from "../components/UserIndex/UsersList.vue";
// @ is an alias to /src

export default {
  name: "UserIndex",
  components: {
    UsersList,
  },
};
</script>
