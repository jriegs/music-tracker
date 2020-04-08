<template>
  <v-app-bar text dense class="cyan mb-4" dark fixed>
    <v-toolbar-title>
      <router-link
        to="/"
        tag="span"
        style="cursor: pointer">
          Music Tracker
      </router-link>
    </v-toolbar-title>

    <!-- <v-btn text dark>Browse</v-btn> -->

    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn text
             dark
             to="login"
             v-if="!$store.state.isUserLoggedIn"
      >
        Login
      </v-btn>

      <v-btn text
             dark
             to="register"
             v-if="!$store.state.isUserLoggedIn"
      >
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
