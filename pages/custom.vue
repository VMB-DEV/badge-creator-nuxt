<script setup lang="ts">
// import { useSharedState } from '~/composables/useState'
// import { useSharedState } from '~/composables/test'
// const sharedState = useSharedState()
import 'vue-search-select/dist/VueSearchSelect.css'

import {useBadgeStore} from "~/store/badgeStore";
import {storeToRefs} from "pinia";
import logoJson from "~/assets/logo_data.json";
import {LogoType} from "../utils/badgeType";

const badgeState = useBadgeStore();
// console.log("STATE", badgeState);
// console.log("STATE get", badgeState.logoFGColor);
// console.log("STATE get", badgeState.leftPartBGColor);
const selected = ref(2);
const logoList = logoJson.list;

const search = ref('')
const logo = ref(logoList[0]);
const showList = ref(false)

let logoInput = ref("");
function filteredList() {
  return logoList.filter((fruit) =>
      fruit.toLowerCase() == logoInput.value.toLowerCase()
  );
}
console.log(logoInput.value)
const filteredLogos = computed(() =>
    logoList.filter(logo =>
        logo.input.toLowerCase().includes(logoInput.value.toLowerCase())
    )
)
const logoType = ref(badgeState.logoType)
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
    <input v-if="selected > 0" type="text" name="label1" id="label1" :value="badgeState.labels[0] ?? ''" />
    <input v-if="selected > 1" type="text" name="label2" id="label2" :value="badgeState.labels[1] ?? ''" />
    <div class="flex">
      <p>first part bg</p>
      <ColorsPicker :initial-value="badgeState.leftPartBGColor"/>
      <p v-if="selected > 1">second part bg</p>
      <ColorsPicker v-if="selected > 1" :initial-value="badgeState.rightPartBGColor"/>
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
    <LogoSelectionClassic v-if="logoType === LogoType.normal" />
<!--    <USelect v-model="logo" :options="logoList" />-->
    <!--    <select-->
<!--        class="w-fit"-->
<!--        v-model="badgeState.classicLogo"-->
<!--    >-->
<!--      <option v-for="logo in logoList" :value="logo" :key="logo">{{ logo.input }}</option>-->
<!--    </select>-->
<!--    <div class="relative">-->
<!--      <input-->
<!--          v-model="badgeState.classicLogo"-->
<!--          placeholder="Search logos..."-->
<!--          class="w-full px-4 py-2 border border-gray-300 rounded"-->
<!--          @focus="showList = true"-->
<!--          @blur="setTimeout(() => showList = false, 200)"-->
<!--      />-->

<!--      <div v-if="showList" class="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">-->
<!--        <div-->
<!--            v-for="logo in filteredLogos"-->
<!--            :key="logo.name"-->
<!--            class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-amber-accent-1"-->
<!--            @click="badgeState.classicLogo = logo.name"-->
<!--        >-->
<!--          {{ logo.name }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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