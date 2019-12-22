<template>
  <div id="app">
    <UsernamesInput />
    <Tabs />
  </div>
</template>

<script>
const UsernamesInput = () => import('@/components/Input.vue');
const Tabs = () => import('@/components/Tabs.vue');

export default {
  name: 'app',
  components: {
    UsernamesInput,
    Tabs,
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
