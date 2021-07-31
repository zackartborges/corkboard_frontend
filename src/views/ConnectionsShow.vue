<template>
  <div class="connections-show">
    <user-connection />
  </div>
</template>
<script>
import UserConnection from "../components/UserConnection.vue";

export default {
  name: "ConnectionsShow",
  components: {
    UserConnection,
  },
};
</script>
;