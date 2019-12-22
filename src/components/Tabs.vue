<template>
  <ul class="tabs">
    <Tab
      v-for="(user, i) in usersList"
      :key="i"
      :user="user"
    />
  </ul>
</template>

<script>
const Tab = () => import('@/components/TabsTab.vue');

export default {
  name: 'tabs',
  components: {
    Tab,
  },
  computed: {
    usersList() {
      return this.$store.getters.getUsersList;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
