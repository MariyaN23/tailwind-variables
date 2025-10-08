<script setup lang="ts">

</script>

<template>
  <header>
    <div>
      <h1 class="text-xl">Tailwind variables</h1>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<style scoped>
header,
footer {
  padding: 1rem;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>