<template>
  <app-panel title="Music Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="300">
    </youtube>
  </app-panel>
</template>

<script>
import Vue from 'vue'
import YoutubeEmbed from 'vue-youtube-embed'

Vue.use(YoutubeEmbed)

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
