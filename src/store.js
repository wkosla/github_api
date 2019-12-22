import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    usersList: [],
  },
  getters: {
    getUsersList: state => state.usersList,
  },
  mutations: {
    ADD_USER: (state, username) => {
      state.usersList.push(username);
    },
    ADD_USERS: (state, array) => {
      state.usersList = array;
    },
  },
  actions: {
  },
});

export default store;
