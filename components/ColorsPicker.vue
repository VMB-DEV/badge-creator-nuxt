<script setup lang="ts">
import PickColors from 'vue-pick-colors'
import {ref} from "vue";
const value = ref('#ff0000')
</script>

<template>
  <pick-colors
      v-model:value="value"
      :theme="'dark'"
      :show-alpha="false"
      :colors="[]"
  />
</template>
