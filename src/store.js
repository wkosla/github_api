import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const baseUrl = 'https://api.github.com/users/';

const store = new Vuex.Store({
  state: {
    usersList: [],
    userDetails: {},
    userRepos: {},
  },
  getters: {
    getUsersList: state => state.usersList,
    getUserDetails: state => state.userDetails,
    getUserRepos: state => state.userRepos,
  },
  mutations: {
    ADD_USERS: (state, array) => {
      state.usersList = array;
    },
    GET_USER_DETAILS: (state, username) => {
      if (state.userDetails.login !== username) {
        Vue.axios.get(`${baseUrl}${username}`)
          .then(({ data }) => {
            state.userDetails = data;
          });

        Vue.axios.get(`${baseUrl}${username}/repos`)
          .then(({ data }) => {
            state.userRepos = data;
          });
      }
    },
  },
  actions: {
  },
});

export default store;
