<script setup lang="ts">
import logoJson from "~/assets/logo_data.json";
import {useBadgeStore} from "~/store/badgeStore";
const logoList = logoJson.list;
const badgeStore = useBadgeStore();

const colorValue = ref(badgeStore.logoFGColor)
let logoInput = ref("");
const filteredLogos = computed(() =>
    logoList.filter(logo =>
        logo.option.toLowerCase().includes(logoInput.value.toLowerCase())
    )
)
const showList = ref(false);
const itemClicked = (e) => {
  badgeStore.updateClassicalLogo(e.input)
  logoInput.value = e.option
  showList.value = false;
  // const input = document.querySelector('input');
  // input?.blur();
}
</script>

<template>
  <div>
    <div class="flex">
      <p>Logo color</p>
      <ColorsPicker :initial-value="colorValue" :update-color="badgeStore.updateLogoColor"/>
    </div>
    <div class="input-container">
      <input
          class="input"
          @focusin="showList = true"
          @focusout="showList = false"
          v-model="logoInput"
          placeholder="search for a logo"
      />
      <div
          v-if="showList"
          class="list overflow-y-auto "
          @mousedown.prevent
      >
        <div
            v-if="showList"
            class="item"
            v-for="logo in filteredLogos"
            :key="logo"
            @mousedown="itemClicked(logo)"
        >
          <p>{{ logo.option }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  width: fit-content;
}

input {
  //position: relative;
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

.list {
  position: absolute;
  //z-index: 50;
  width: 100%;
  height: min-content;
  max-height: 200px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}
.item {
  //width: 350px;
  //margin: 0 auto 10px auto;
  padding: 1px 10px;
  color: black;
  border-radius: 5px;
  //box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
  //rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  //background-color: rgb(97, 62, 252);
  background-color: #a5a5a5;
  cursor: pointer;

}

.item:hover {
  background-color: #808080;
}

</style>