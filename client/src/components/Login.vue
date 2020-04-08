<template>
  <v-layout column>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-app-bar text dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-app-bar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email"
              name="email"
              placeholder="email"
              v-model="email">
          <br>
          <input type="password"
              name="password"
              placeholder="password"
              v-model="password">
          <br>
          <div v-html="error" class="error"></div>
          <br>
          <v-btn class="cyan" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .layout.column {
    align-items: center;
  }
  .flex.xs6 {
    max-width: 700px;
    width: 100%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
    0 2px 2px 0 rgba(0,0,0,.14),
    0 1px 5px 0 rgba(0,0,0,.12);
  }
  .white.elevation-2 {
    border: 1px solid;
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 20px;
  }
  .white.elevation-2 > div {
    padding-top: 20px;
  }
  input {
    background: #f5f5f5;
    height: 40px;
    width: 100%;
    max-width: 400px;
    margin: 10px 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  .error {
    color: red;
  }
</style>
