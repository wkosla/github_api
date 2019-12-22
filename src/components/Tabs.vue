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
      return this.$store.getters.getUsersList.slice();
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  min-height: 20px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
</style>
