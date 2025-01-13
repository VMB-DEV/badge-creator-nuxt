<script setup lang="ts">
// import { useSharedState } from '~/composables/useState'
// import { useSharedState } from '~/composables/test'
// const sharedState = useSharedState()
import 'vue-search-select/dist/VueSearchSelect.css'

import {useBadgeStore} from "~/store/badgeStore"
import {storeToRefs} from "pinia"
import logoJson from "~/assets/logo_data.json"
import {LogoType} from "../utils/badgeType"

const badgeState = useBadgeStore()
// console.log("STATE", badgeState)
// console.log("STATE get", badgeState.logoFGColor)
// console.log("STATE get", badgeState.leftPartBGColor)
const selected = ref(2)
const logoList = logoJson.list

const search = ref('')
const logo = ref(logoList[0])
const showList = ref(false)

let logoInput = ref("")
function filteredList() {
  return logoList.filter((fruit) =>
      fruit.toLowerCase() == logoInput.value.toLowerCase()
  )
}
console.log(logoInput.value)
const filteredLogos = computed(() =>
    logoList.filter(logo =>
        logo.input.toLowerCase().includes(logoInput.value.toLowerCase())
    )
)
const logoType = ref(badgeState.logoType)
const updateLabelSelection = (e) => {
  const newLabelsNumber = e.target.value
  badgeState.updateLabelsNumber(newLabelsNumber)
}
</script>

<template>
  <header class="mx-2">Custom</header>
  <div class="mx-2 flex flex-col w-fit">
    <LabelsNumberSelection />
    <LabelInput
        v-if="selected > 0"
        :initial-value="badgeState.labels.at(0)"
        :updater="badgeState.updateLabel0"
    />
    <LabelInput
        v-if="selected > 1"
        :initial-value="badgeState.labels.at(1)"
        :updater="badgeState.updateLabel1"
    />
    <div class="flex">
      <p>first part bg</p>
      <ColorsPicker :initial-value="badgeState.leftPartBGColor" :update-color="badgeState.updateLeftPartColor"/>
      <p v-if="selected > 1">second part bg</p>
      <ColorsPicker v-if="selected > 1" :initial-value="badgeState.rightPartBGColor" :update-color="badgeState.updateRightPartColor"/>
    </div>
    <div class="flex">
      <select
          class="w-fit"
          v-model="logoType"
      >
        <option>{{LogoType.none}}</option>
        <option>{{LogoType.normal}}</option>
        <option>{{LogoType.custom}}</option>
      </select>
      <p class="mx-2">logo</p>
    </div>
    <LogoSelectionClassic v-if="logoType === LogoType.normal"/>
    <LogoSelectionCustom v-if="logoType === LogoType.custom" :update-color="badgeState.updateLogoColor"/>
    <h2>Result</h2>
    <p>{{badgeState.result}}</p>
    <img class="mx-2" :src="badgeState.url" alt="current badge">
  </div>
</template>

<style scoped>
select {
  margin: 3px 0
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
img{
  max-width: 150px;
}


</style>