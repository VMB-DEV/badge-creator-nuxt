<script setup lang="ts">

const props = defineProps({
  updater: Function as (e: string) => void,
  initialValue: {default : '42', type: String},
});
const inputChange = (e) => {
  const newLabel: string = e.target.value;
  props.updater(newLabel)
}
</script>

<template>
  <input
      type="text" name="label1"
      id="label1"
      @change="inputChange"
  />
</template>

<style scoped>

</style>