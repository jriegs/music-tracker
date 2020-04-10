<template>
  <v-layout column>
    <v-flex xs6>
      <app-panel title="Songs">
        <v-btn
          slot="action"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab
          to="/songs/create"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">

          <v-layout>
            <v-flex xs6>
              <div class="song-info title">
                {{ song.title }}
              </div>
              <div class="song-info artist">
                {{ song.artist }}
              </div>
              <div class="song-info genre">
                {{ song.genre }}
              </div>
              <v-btn
                dark
                class="view-btn"
              >
                View
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img
                :src="song.albumImageUrl"
                :alt="song.album"
                class="album-image"
                style="width: 100%">
            </v-flex>
          </v-layout>
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
    this.songs = (await SongsService.index()).data
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
  .song .xs6 {
      padding: 20px;
  }
  .song .xs6:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .song-info {
    font-size: 18px;
    line-height: 1.5;
  }
  .song-info.title {
    font-size: 32px;
  }
  .song-info.artist {
    font-size: 24px;
  }
  .view-btn {
      width: 50%;
      margin: 20px auto 0;
  }
</style>
