<template>
  <li @click="showUserDetails">{{user}}</li>
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
  methods: {
    showUserDetails() {
      this.$store.dispatch('GET_USER_DETAILS', this.user);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
