<template>
  <v-layout column>
    <v-flex xs6>
      <app-panel title="Register">
        <form name="music-tracker-form">
          <input
            type="email"
            name="email"
            placeholder="email"
            v-model="email">
          <br>
          <input
            type="password"
            name="password"
            placeholder="password"
            v-model="password">
          <br>
          <div v-html="error" class="error"></div>
          <br>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </form>
      </app-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    appPanel: Panel
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
