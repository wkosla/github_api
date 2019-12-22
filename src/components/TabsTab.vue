<template>
  <li>{{user}}</li>
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
};
</script>

<style lang="scss" scoped>

</style>
