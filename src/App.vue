<template>
  <div id="app">
    <UsernamesInput />
    <Tabs />
    <User />
  </div>
</template>

<script>
const UsernamesInput = () => import('@/components/Input.vue');
const Tabs = () => import('@/components/Tabs.vue');
const User = () => import('@/components/User.vue');

export default {
  name: 'app',
  components: {
    UsernamesInput,
    Tabs,
    User,
  },
  computed: {
    usersList() {
      return this.$store.getters.getUsersList;
    },
  },
};
</script>

<style lang="scss">

</style>
