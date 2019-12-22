<template>
  <li class="repo">
    <header class="repo__header">
      <h3 class="repo__name">
        {{repo.name}}
      </h3>
      <p class="repo__desc" v-if="repo.description">
        {{repo.description}}
      </p>
    </header>
    <p class="repo__updated">
      Last updated:
      <span>{{updated}}</span>
    </p>
  </li>
</template>

<script>
import moment from 'moment-mini';

export default {
  name: 'repo',
  props: {
    repo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    updated() {
      return moment(this.repo.updated_at).format('DD.MM.YYYY hh:mm:ss');
    },
  },
};
</script>

<style lang="scss" scoped>
.repo {
  border-bottom: 1px solid $line-color;
  display: flex;
  margin-top: -1px;
  padding: 10px;
  position: relative;
  transition: .15s;
  will-change: background-color, box-shadow;

  &:hover {
    background-color: $bg-secondary;
    border-color: transparent;
    box-shadow: $shadow-hover;
    color: $link;
  }
}

.repo__name {
  margin: 0;
}

.repo__desc {
  color: $secondary;
  font-size: .8em;
  margin: 10px 0 0;
}

.repo__updated {
  color: $secondary;
  font-size: .8em;
  margin: 0 0 0 auto;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
