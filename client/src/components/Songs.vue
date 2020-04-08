<template>
  <v-layout column>
    <v-flex xs6>
      <app-panel title="Songs">
        <div v-for="song in songs" :key="song.title">
          {{ song.title }}
          {{ song.artist }}
          {{ song.album }}
        </div>
      </app-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = await SongsService.index()
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
