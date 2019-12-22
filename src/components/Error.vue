<template>
  <p class="error">
    Sorry. We couldn't find user with this username.
  </p>
</template>

<script>
export default {
  name: 'error',
};
</script>

<style lang="scss" scoped>
.error {
  font-size: 1.5em;
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  width: 90vw;
}
</style>
