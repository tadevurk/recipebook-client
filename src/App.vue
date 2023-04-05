<template>
  <navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation.vue'
import { useUserStore } from './stores/usersession'

export default {
  setup() {
    return {
      store: useUserStore()
    }
  },
  mounted(){
    this.store.localLogin();
  },
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style>
</style>
