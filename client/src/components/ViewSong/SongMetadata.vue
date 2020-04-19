<template>
  <app-panel title="Song Metadata">
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
          class="cyan"
          :to="{
            name: 'edit-song',
            params: {
              songId: song.id
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setBookmark">
          Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="removeBookmark">
          Remove Bookmark
        </v-btn>
      </v-flex>

      <v-flex>
          <img
            :src="song.albumImageUrl"
            :alt="song.album"
            class="album-image"
            style="width: 100%">
          <br>
          {{ song.album }}
      </v-flex>
    </v-layout>
  </app-panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }

      console.log('bookmark')
    },
    async removeBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = false
      } catch (err) {
        console.log(err)
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
  .song .xs6 {
      padding: 20px;
      box-shadow: none;
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
</style>
