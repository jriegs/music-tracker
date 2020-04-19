<template>
  <v-app-bar text dense class="cyan mb-4" dark fixed>
    <v-toolbar-title>
      <router-link
        to="/songs"
        tag="span"
        style="cursor: pointer">
          Music Tracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>

      <v-btn
        text
        dark
        to="/songs"
      >
        Browse
      </v-btn>

    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        text
        dark
        to="/login"
        v-if="!$store.state.isUserLoggedIn"
      >
        Login
      </v-btn>

      <v-btn
        text
        dark
        to="/register"
        v-if="!$store.state.isUserLoggedIn"
      >
        Sign Up
      </v-btn>

      <v-btn
        text
        dark
        @click="logout"
        v-if="$store.state.isUserLoggedIn"
      >
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
  .v-toolbar__title {
    margin-right: 20px;
  }
</style>
