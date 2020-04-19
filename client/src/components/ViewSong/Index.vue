<template>
  <div>
    <v-layout column>
      <v-flex xs6>
        <app-song-metadata :song="song" />
      </v-flex>

      <v-flex xs6>
        <app-youtube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <app-tabs :tabs="song.tab"></app-tabs>
      </v-flex>

      <v-flex xs6>
        <app-lyrics :lyrics="song.lyrics"></app-lyrics>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tabs from './Tabs'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    console.log(songId)
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    appSongMetadata: SongMetadata,
    appYoutube: Youtube,
    appLyrics: Lyrics,
    appTabs: Tabs
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
  .song .xs6 {
      padding: 20px;
      box-shadow: none;
  }
  .song .xs6:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
</style>
