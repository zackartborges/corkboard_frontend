<template>
  <div class="user-index">
    <h1>Connect with others!</h1>
    <hr width="50%" />
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
