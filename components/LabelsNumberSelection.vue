<script setup lang="ts">
import {useBadgeStore} from "~/store/badgeStore"
const badgeState = useBadgeStore()
const updateLabelSelection = (e) => {
  const newLabelsNumber = e.target.value
  badgeState.updateLabelsNumber(newLabelsNumber)
}
</script>

<template>
  <div class="flex">
    <select
        class="w-fit"
        v-model="badgeState.labelsNumber"
        @change="updateLabelSelection"
    >
      <option>0</option>
      <option>1</option>
      <option>2</option>
    </select>
    <p class="mx-2">label{{badgeState.labelsNumber > 1 ? 's' : ''}}</p>
  </div>
</template>

<style scoped>

</style>