<template>
  <transition name="fade" mode="out-in">
    <template v-if="loadingData">
      <img
        class="user__loader"
        :src="require('../assets/oval.svg')"
        alt="Loading data"
        key="loading-spinner"
      >
    </template>
    <template v-else>
      <div class="user" key="user">
        <div class="user__details">
          <img
            class="user__avatar"
            :src="userDetails.avatar_url"
            alt="Wojciech Kosla gravatar"
          >
          <header class="user__header">
            <h1 class="user__name">
              {{userDetails.name}}
            </h1>
            <p class="user__login">
              <a
                class="user__link"
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
              Public repositories: {{userDetails.public_repos}}
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
              <Repo :repo="repo" />
            </a>
          </ul>
        </div>
      </div>
    </template>
  </transition>
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
    loadingData() {
      return this.$store.getters.getLoadingStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  margin: 0 auto;
  max-width: 1000px;
  width: 90vw;
}

.user__loader {
  display: block;
  margin: auto;
  opacity: .7;
  width: 60px;
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

.user__link {
  transition: .15s;
  will-change: color;

  &:hover {
    color: $link;
  }
}

.user__repo-count {
  margin: 0;
}

.user__repos-list {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
