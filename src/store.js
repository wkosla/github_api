import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const baseUrl = 'https://api.github.com/users/';
/* eslint-disable consistent-return */
async function apiRequest(username, repos = false) {
  try {
    return await Vue.axios.get(`${baseUrl}${username}${repos ? '/repos?per_page=1000' : ''}`);
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
    dataLoading: false,
  },
  getters: {
    getUsersList: state => state.usersList,
    getUserDetails: state => state.userDetails,
    getUserRepos: state => state.userRepos,
    getLoadingStatus: state => state.dataLoading,
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
    CHANGE_LOADING_STATUS: (state, loading) => {
      state.dataLoading = loading;
    },
  },
  actions: {
    GET_USER_DETAILS: ({ state, commit }, username) => {
      commit('CHANGE_LOADING_STATUS', true);

      if (state.userDetails.login !== username) {
        apiRequest(username).then(({ data }) => {
          commit('SET_DETAILS', data);

          apiRequest(username, true).then(({ data }) => {
            commit('SET_REPOS', data);
            commit('CHANGE_LOADING_STATUS', false);
          });
        });
      }
    },
  },
});

export default store;
