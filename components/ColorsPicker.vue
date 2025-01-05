<script setup lang="ts">
import PickColors from 'vue-pick-colors'
import {ref} from "vue";
const props = defineProps({ initialValue: {default : '155515', type: String} })
const value = ref('#' + props.initialValue)
</script>

<template>
  <pick-colors
      v-model:value="value"
      :theme="'dark'"
      :show-alpha="false"
      :colors="[]"
  />
</template>
