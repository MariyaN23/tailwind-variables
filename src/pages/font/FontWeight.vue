<script setup lang="ts">
import { fontWeights } from "@/helpers/tailwind-units.ts";
</script>

<template>
  <div class="space-y-4">
    <div
        v-for="(value, key) in fontWeights"
        :key="key"
        class="grid grid-cols-2"
    >
      <p>{{ value }}</p>
      <p>{{ key }}</p>
    </div>
  </div>
</template>
