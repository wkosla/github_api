<template>
  <li :class="['tab', {'tab--hidden': isEmpty}]">
    <button :class="['tab__btn', {'tab__btn--active': isActive}]" @click="showUserDetails">
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
    isEmpty() {
      const re = /^(?!\s*$).+/g;
      return !re.test(this.user);
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
  margin: 0 10px;

  &--hidden {
    display: none;
  }
}

.tab__btn {
  background-color: $bg-primary;
  border: 0;
  border-bottom: 1px solid $primary;
  color: inherit;
  cursor: pointer;
  display: list-item;
  font-size: 1.12em;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 20px;
  transition: .15s;
  will-change: color, border-color;

  &--active,
  &:hover {
    border-color: $link;
    color: $link;
  }
}
</style>
