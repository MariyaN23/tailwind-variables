<script setup lang="ts">
import Button from "primevue/button"
import { paths } from "@/routes/paths.ts";

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('my-app-dark')
}
</script>

<template>
  <header>
    <div class="flex justify-between items-center">
      <Button variant="text" asChild v-slot="slotProps">
        <RouterLink :to="paths.main" :class="slotProps.class">
          <h1 class="text-2xl font-bold text-primary-500">
            Tailwind variables converter
          </h1>
        </RouterLink>
      </Button>
      <Button
          aria-label="Toggle Dark Mode"
          icon="pi pi-sun"
          size="small"
          @click="toggleDarkMode()"
          rounded
          variant="outlined"
      />
    </div>
    <Button variant="text" asChild v-slot="slotProps">
      <RouterLink :to="paths.fontWeight" :class="slotProps.class">
        font-weight variables
      </RouterLink>
    </Button>
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
  max-width: 768px;
  margin: 0 auto;
}
</style>