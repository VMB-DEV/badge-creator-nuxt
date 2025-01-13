<script setup lang="ts">
import PickColors from 'vue-pick-colors'
import {ref} from "vue"
const props = defineProps({
  initialValue: {default : '155515', type: String},
  updateColor: {default : (e) => {console.error("no update for ", e)}, type: Function as PropType<(e: string) => void>},
})
const value = ref('#' + props.initialValue)
const colorChange = (e) => {
  props.updateColor(e.slice(1))
}
</script>

<template>
  <pick-colors
      v-model:value="value"
      @change="colorChange"
      :theme="'dark'"
      :show-alpha="false"
      :colors="[]"
  />
</template>
