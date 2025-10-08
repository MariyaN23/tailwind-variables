<script setup lang="ts">
import Button from "primevue/button"

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('my-app-dark')
}
</script>

<template>
  <header>
    <div class="flex justify-between items-center">
      <h1 class="text-xl">Tailwind variables converter</h1>
      <Button
          aria-label="Toggle Dark Mode"
          icon="pi pi-sun"
          @click="toggleDarkMode()"
          rounded
          variant="outlined"
      />
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<style scoped>
header,
main {
  padding: 1rem;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>