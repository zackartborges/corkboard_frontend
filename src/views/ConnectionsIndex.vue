<template>
  <div class="connection-index">
    <user-connections />
  </div>
</template>
<script>
import UserConnections from "../components/UserConnections.vue";

export default {
  name: "ConnectionsIndex",
  components: {
    UserConnections,
  },
};
</script>
;
