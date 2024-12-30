<script setup lang="ts">
console.log("%c Default layouts", "background gray")
</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <NuxtLink to="/" class="font-bold">Nuxt Badge Creator</NuxtLink>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <ul class="flex gap-4">
        <li> <NuxtLink to="/">Home</NuxtLink> </li>
        <li> <NuxtLink to="/custom">Custom</NuxtLink> </li>
        <li> <NuxtLink to="/preselection">Preselection</NuxtLink> </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

header {
  margin: 0 0 15px 15px;
  font-size: 25px;
  color: #12b488;
}

p {
  margin: 20px 0;
}
</style>