<template>
  <div id="app">
    <div class="topbar">
      <UsernamesInput />
      <Tabs />
    </div>
    <User
      v-if="activeUser"
      key="user-info"
    />
    <Error
      v-else-if="userError"
      key="user-error"
    />
  </div>
</template>

<script>
const UsernamesInput = () => import('@/components/Input.vue');
const Tabs = () => import('@/components/Tabs.vue');
const User = () => import('@/components/User.vue');
const Error = () => import('@/components/Error.vue');

export default {
  name: 'app',
  components: {
    UsernamesInput,
    Tabs,
    User,
    Error,
  },
  computed: {
    usersList() {
      return this.$store.getters.getUsersList;
    },
    activeUser() {
      return this.$store.getters.getUserDetails.login;
    },
    userError() {
      return this.$store.getters.getUserError;
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/modern-normalize/modern-normalize.css';
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap&subset=latin-ext');

html {
  overflow-y: scroll;
}

body {
  background-color: $bg-primary;
  color: $primary;
  font-family: $font-family;
  font-size: .875rem;
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
}

.topbar {
  box-shadow: $shadow-top;
  margin-bottom: 80px;
}

#app {
  padding-bottom: 80px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
