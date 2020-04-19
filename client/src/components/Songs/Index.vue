<template>
  <v-layout>
    <v-flex xs6>
      <app-songs-search></app-songs-search>
      <app-songs></app-songs>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    appSongs: SongsPanel,
    appSongsSearch: SongsSearchPanel
  }
}
</script>

<style scoped>

</style>
