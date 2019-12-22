import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const baseUrl = 'https://api.github.com/users/';
/* eslint-disable consistent-return */
async function apiRequest(username, repos = false) {
  try {
    return await Vue.axios.get(`${baseUrl}${username}${repos ? '/repos?per_page=99999' : ''}`);
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
    userError: false,
  },
  getters: {
    getUsersList: state => state.usersList,
    getUserDetails: state => state.userDetails,
    getUserRepos: state => state.userRepos,
    getLoadingStatus: state => state.dataLoading,
    getUserError: state => state.userError,
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
    SET_USER_ERROR: (state, err) => {
      state.userError = err;
    },
  },
  actions: {
    GET_USER_DETAILS: ({ state, commit, dispatch }, username) => {
      dispatch('CLEAR_USER');

      if (state.userDetails.login !== username) {
        commit('CHANGE_LOADING_STATUS', true);
        commit('SET_USER_ERROR', false);

        apiRequest(username).then(({ data }) => {
          commit('SET_DETAILS', data);

          apiRequest(username, true).then(({ data }) => {
            commit('SET_REPOS', data);
            commit('CHANGE_LOADING_STATUS', false);
          });
        }).catch(() => {
          commit('CHANGE_LOADING_STATUS', false);
          commit('SET_USER_ERROR', true);
        });
      }
    },
    CLEAR_USER: ({ commit }) => {
      commit('SET_DETAILS', {});
      commit('SET_REPOS', {});
    },
  },
});

export default store;
