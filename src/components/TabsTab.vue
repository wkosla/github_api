<template>
  <li :class="['tab', {'tab--active': isActive}]">
    <button class="tab__btn" @click="showUserDetails">
      {{user}}
    </button>
  </li>
</template>

<script>
export default {
  name: 'tab',
  props: {
    user: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    isActive() {
      const activeUser = this.$store.getters.getUserDetails.login;
      return activeUser === this.user;
    },
  },
  methods: {
    showUserDetails() {
      this.$store.dispatch('GET_USER_DETAILS', this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  border-bottom: 1px solid $primary;
  cursor: pointer;
  margin: 0 10px;

  &--active,
  &:hover {
    border-color: $link;
    color: $link;
  }
}

.tab__btn {
  background-color: $bg-primary;
  border: 0;
  color: inherit;
  cursor: pointer;
  font-size: 1.12em;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 20px;
}
</style>
