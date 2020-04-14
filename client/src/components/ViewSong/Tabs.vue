<template>
  <app-panel title="Guitar Tabs">
    <textarea
      readonly
      v-model="tabs"></textarea>
  </app-panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'tabs'
  ],
  components: {
    appPanel: Panel
  }
}
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
