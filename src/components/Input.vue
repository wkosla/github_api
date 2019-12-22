<template>
  <div class="input">
    <label class="input__label" for="usernames">
      Usernames
    </label>
    <input id="usernames" class="input__input" type="text" v-model="users" @input="updateUsersList">
    <button class="input__btn">
      Zatwierdź
    </button>
  </div>
</template>

<script>
export default {
  name: 'usernames-input',
  data: () => ({
    users: '',
  }),
  methods: {
    updateUsersList() {
      const users = this.users.split(' ');
      this.$store.commit('ADD_USERS', users);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
