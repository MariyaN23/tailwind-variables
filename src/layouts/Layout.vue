<script setup lang="ts">
import Button from "primevue/button"
import { paths } from "@/routes/paths.ts";
import { onMounted, ref, watch } from "vue";

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
}
const applyTheme = () => {
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', isDark.value)
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
  applyTheme()
})
watch(isDark, () => applyTheme())
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
          @click="toggleTheme()"
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