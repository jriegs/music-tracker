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
import Panel from '@/components/Panel'
import Vue from 'vue'
import YoutubeEmbed from 'vue-youtube-embed'

Vue.use(YoutubeEmbed)

export default {
  props: [
    'youtubeId'
  ],
  components: {
    appPanel: Panel
  }
}
</script>

<style scoped>

</style>
