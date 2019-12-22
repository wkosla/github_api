import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const baseUrl = 'https://api.github.com/users/';
/* eslint-disable consistent-return */
async function apiRequest(username, repos = false) {
  try {
    return await Vue.axios.get(`${baseUrl}${username}${repos ? '/repos' : ''}`);
  } catch (err) {
    console.log(err);
  }
}
/* eslint-enable consistent-return */

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
    SET_DETAILS: (state, user) => {
      state.userDetails = user;
    },
    SET_REPOS: (state, repos) => {
      state.userRepos = repos;
    },
  },
  actions: {
    GET_USER_DETAILS: ({ state, commit }, username) => {
      if (state.userDetails.login !== username) {
        apiRequest(username).then(({ data }) => {
          commit('SET_DETAILS', data);
        });

        apiRequest(username, true).then(({ data }) => {
          commit('SET_REPOS', data);
        });
      }
    },
  },
});

export default store;
