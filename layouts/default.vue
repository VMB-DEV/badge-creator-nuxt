<script setup lang="ts">
console.log("%c Default layouts", "background gray")
</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <ul class="flex gap-4">
        <li> <NuxtLink to="/">Home</NuxtLink> </li>
        <li> <NuxtLink to="/custom">About</NuxtLink> </li>
        <li> <NuxtLink to="/preselection">Products</NuxtLink> </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>