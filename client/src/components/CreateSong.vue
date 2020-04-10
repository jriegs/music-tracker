<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <app-panel title="Song Metadata">
          <v-text-field
            label="Title"
            :rules=[required]
            v-model="song.title">
          </v-text-field>

          <v-text-field
            label="Artist"
            :rules=[required]
            v-model="song.artist">
          </v-text-field>

          <v-text-field
            label="Genre"
            :rules=[required]
            v-model="song.genre">
          </v-text-field>

          <v-text-field
            label="Album"
            :rules=[required]
            v-model="song.album">
          </v-text-field>

          <v-text-field
            label="Album Image Url"
            :rules=[required]
            v-model="song.albumImageUrl">
          </v-text-field>

          <v-text-field
            label="Youtube ID"
            :rules=[required]
            v-model="song.youtubeId">
          </v-text-field>
        </app-panel>
      </v-flex>
      <v-flex xs8>
        <app-panel title="Song Structure" class="ml-2">
          <v-textarea
            label="Lyrics"
            multi-line
            :rules=[required]
            v-model="song.lyrics">
          </v-textarea>

          <v-textarea
            label="Tab"
            multi-line
            :rules=[required]
            v-model="song.tab">
          </v-textarea>
        </app-panel>

        <br>

        <div class="error" v-if="error">
          {{ error }}
        </div>

        <br>

        <v-btn
          dark
          @click="create"
        >
          Create Song
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
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
    margin: 0 20px;
  }
  .v-text-field {
    margin: 10px 20px;
    padding: 10px;
  }
  .error {
    color: red;
  }
</style>
