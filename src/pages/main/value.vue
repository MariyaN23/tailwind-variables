<script setup lang="ts">
import type { UnitName } from "@/pages/main/helpers.ts";

defineProps<{
  value: UnitName
}>()
</script>

<template>
  <span v-if="value" class="font-semibold text-primary-500">
  {{ value }}
  </span>
  <span v-else class="font-semibold text-surface-500">
    -
  </span>
</template>
