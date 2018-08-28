<template>
  <div id="app">
    <div id="nav">
      <router-link
        class="link"
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path">
        {{route.name}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { routes } from './router';

export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
#nav {
  padding: 1em;
  a {
    font-weight: bold;
     color: $black;
    &.router-link-exact-active {
      color: $green;
    }
  }
}
.link{
  margin-right: 1em;
}
</style>
