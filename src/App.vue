<template>
  <div id="app">
    <div class="topbar">
      <UsernamesInput />
      <Tabs />
    </div>    
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
@import '../node_modules/modern-normalize/modern-normalize.css';
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap&subset=latin-ext');

body {
  background-color: $bg-primary;
  color: $primary;
  font-family: $font-family;
  font-size: .875rem;
}

.topbar {
  box-shadow: $shadow-top;
}
</style>
