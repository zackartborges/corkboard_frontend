<template>
  <div class="searchbar">
    Search for Users:
    <input v-model="titleFilter" list="titles" />
    <datalist id="users">
      <input v-model="titleFilter" />
      <option v-for="user in filterBy(users, userFilter, 'username')" :key="user.id">{{ user.username }}</option>
    </datalist>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      userFilter: "",
    };
  },

  methods: {},
};
</script>
