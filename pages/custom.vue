<script setup lang="ts">
// import { useSharedState } from '~/composables/useState'
// import { useSharedState } from '~/composables/test'
// const sharedState = useSharedState()

import {useBadgeStore} from "~/store/badgeStore";
import {storeToRefs} from "pinia";

const badgeState = useBadgeStore();
console.log("STATE", badgeState);
console.log("STATE test", badgeState.test1);
console.log("STATE get", badgeState.logoFGColor);
const selected = ref(2);
</script>

<template>
  <header class="mx-2">Custom</header>
  <div class="mx-2 flex flex-col w-fit">
    <div class="flex">
      <select
          class="w-fit"
          v-model="selected"
      >
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
      <p class="mx-2">label{{selected > 1 ? 's' : ''}}</p>
    </div>
    <input v-if="selected > 0" type="text" name="label1" id="label1" />
    <input v-if="selected > 1" type="text" name="label2" id="label2" />
    <div class="flex">
      <p>first part bg</p><ColorsPicker />
      <p v-if="selected > 1">second part bg</p><ColorsPicker v-if="selected > 1"/>
    </div>
    <h2>Result</h2>
  </div>
</template>

<style scoped>
select {
  margin: 3px 0;
}
input {
  outline: #555555 solid 1px;
  border-radius: 0.375rem;
  padding: 0.2rem 0.5rem;
  margin: 2px 0;
}
input:hover {
  outline: #808080 solid 1.5px;
}
input:focus {
  outline: #12b488 solid 2px;
}
</style>