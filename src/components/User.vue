<template>
  <div class="user">
    <template v-if="loadingStatus">
      <span>LOADING</span>
    </template>
    <template v-else>
      <div class="user__details">
        <img class="user__avatar" :src="userDetails.avatar_url" alt="Wojciech Kosla gravatar">
        <header class="user__header">
          <h1 class="user__name">
            {{userDetails.name}}
          </h1>
          <p class="user__login">
            <a
              :href="userDetails.html_url"
              target="__blank"
              rel="noreferer"
            >
              @{{userDetails.login}}
            </a>
          </p>
        </header>
      </div>

      <div class="user__repos">
        <header class="user__header">
          <h2 class="user__repo-count">
            Repositories: {{userDetails.public_repos}}
          </h2>
        </header>
        <ul class="user__repos-list">
          <a
            v-for="(repo, i) in userRepos"
            :key="i"
            :href="repo.html_url"
            target="__blank"
            rel="noreferer"
          >
            <Repo
              :repo="repo"
            />
          </a>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
const Repo = () => import('@/components/UserRepo.vue');

export default {
  name: 'user',
  components: {
    Repo,
  },
  computed: {
    userDetails() {
      return this.$store.getters.getUserDetails;
    },
    userRepos() {
      return this.$store.getters.getUserRepos;
    },
    loadingStatus() {
      return this.$store.getters.getLoadingStatus;
    }
  },
};
</script>

<style lang="scss" scoped>
.user {
  margin: 0 auto;
  max-width: 1000px;
  width: 90vw;
}

.user__details {
  border-bottom: 1px solid $line-color;
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 20px;
}

.user__avatar {
  box-shadow: $shadow;
  height: 62px;
  margin-right: 20px;
}

.user__name {
  margin: 0;
}

.user__login {
  color: $secondary;
  font-size: 1.25em;
  margin: 10px 0 0;
}

.user__repo-count {
  margin: 0;
}

.user__repos-list {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
}
</style>
