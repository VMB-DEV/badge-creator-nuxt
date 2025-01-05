<script setup lang="ts">
import {useBadgeStore} from "~/store/badgeStore";

const badgeStore = useBadgeStore();
const svgInput = ref("");
const inputChange = (e) => {
  console.log(e.target.value);
  const b64Logo = btoa(svgInput.value);
  console.log(b64Logo);
  // badgeStore.updateB64Logo(b64Logo);
}
</script>

<template>
  <div class="flex-col">
    <input
        v-model="svgInput"
        placeholder="enter an svg <sv"
        @change="inputChange"
    />
  </div>
</template>

<style scoped>
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