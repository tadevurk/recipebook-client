<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../components/images/HomeMade.png" alt="Your Logo" width="50" height="50" />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link" active-class="active"
            v-if="this.store.isAuthenticated && this.store.role == 2">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/aboutMe" class="nav-link" active-class="active">About Me</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
        </li>
        <li>
          <router-link to="/login" class="nav-link" active-class="active" @click="this.store.logout()"
            v-if="this.store.isAuthenticated">Logout</router-link>
        </li>
        <li>
          <router-link to="/login" class="nav-link" active-class="active"
            v-if="!this.store.isAuthenticated">Login</router-link>
        </li>


      </ul>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '../stores/usersession'

export default {
  name: "Navigation",
  setup() {
    return {
      store: useUserStore(),
    };
  },
};
</script>

<style></style>