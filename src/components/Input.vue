<template>
  <form class="input" @submit.prevent="inputConfirm">
    <label class="input__label" for="usernames">
      Usernames
    </label>
    <input id="usernames" class="input__input" type="text" v-model="users" @input="updateUsersList">
    <button class="input__btn">
      Confirm
    </button>
  </form>
</template>

<script>
export default {
  name: 'usernames-input',
  data: () => ({
    users: '',
  }),
  computed: {
    usersList() {
      return this.$store.getters.getUsersList;
    },
  },
  methods: {
    updateUsersList() {
      const users = this.users.split(' ');
      this.$store.commit('ADD_USERS', users);
    },
    inputConfirm() {
      if (this.usersList.length > 0) {
        this.$store.dispatch('GET_USER_DETAILS', this.usersList[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  align-items: center;
  box-shadow: $shadow-top;
  display: flex;
  padding: 40px;
  justify-content: center;
}

.input__label {
  font-size: 1em;
  font-weight: bold;
  margin-right: 10px;
}

.input__input {
  background-color: $bg-primary;
  border: 1px solid $line-color;
  font-family: $font-family;
  font-size: 1em;
  margin-right: 10px;
  padding: 10px;
  width: 300px;
}

.input__btn {
  align-items: center;
  background-color: $bg-primary;
  border: 0;
  box-shadow: $shadow;
  cursor: pointer;
  display: flex;
  height: 38px;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 0 20px;
  text-transform: uppercase;
  transition: .15s;
  will-change: box-shadow, color;

  &:hover {
    box-shadow: $shadow-hover;
    color: $link;
  }
}
</style>
