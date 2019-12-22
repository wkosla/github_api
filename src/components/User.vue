<template>
  <div class="user">
    <ul class="user__details">
      <li v-for="(value, key) in userDetails" :key="key">{{key}}: {{value}}</li>
    </ul>
    <ul class="user__repos">
      <li v-for="(value, key) in userRepos" :key="key">{{key}}: {{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userDetails() {
      return this.$store.getters.getUserDetails;
    },
    userRepos() {
      return this.$store.getters.getUserRepos;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
