<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { computed, ref } from "vue";
import { getUnitName } from "@/helpers/get-unit-name.ts"
import { borderRadius, breakpoints, fontSizes, maxWidth, spacingValues, } from "@/helpers/tailwind-units.ts";
import Value from "@/pages/main/value.vue";

const basePixel = ref(16)
const baseSpacing = ref(0.25)
const pixels = ref(basePixel.value)
const rem = computed({
  get() {
    return pixels.value / basePixel.value // 1px → 0.063rem
  },
  set(newValue) {
    pixels.value = newValue * basePixel.value // rem → px
  }
})
const fontSize = computed(() => getUnitName(fontSizes, rem.value))
const breakpoint = computed(() => getUnitName(breakpoints, pixels.value))
const width = computed(() => getUnitName(maxWidth, pixels.value))
const spacing = computed(() => {
  const value = baseSpacing.value * rem.value * basePixel.value
  return getUnitName(spacingValues, value)
})
const radius = computed(() => getUnitName(borderRadius, pixels.value))
</script>

<template>
  <div class="space-y-12">
    <div class="flex flex-col gap-2 place-self-end">
      <label
          for="rootElement"
          class="text-sm"
      >
        Root element size in px
      </label>
      <InputNumber
          input-id="rootElement"
          v-model="basePixel"
          size="small"
          :min="0"
          mode="decimal"
          :max-fraction-digits="3"
      />
      <label
          for="baseSpacing"
          class="text-sm"
      >
        Spacing in rem
      </label>
      <InputNumber
          input-id="baseSpacing"
          v-model="baseSpacing"
          size="small"
          :min="0"
          mode="decimal"
          :max-fraction-digits="3"
      />
    </div>
    <div class="grid sm:grid-cols-2 gap-4">
      <InputGroup>
        <InputGroupAddon>
          <span>px</span>
        </InputGroupAddon>
        <InputNumber
            id="pixels"
            aria-label="Pixel value"
            v-model="pixels"
            mode="decimal"
            :max-fraction-digits="3"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <span>rem</span>
        </InputGroupAddon>
        <InputNumber
            id="rem"
            aria-label="Rem value"
            v-model="rem"
            mode="decimal"
            :max-fraction-digits="3"
        />
      </InputGroup>
      <div class="space-y-2">
        <p class="text-primary-700 dark:text-primary-500 text-xl font-semibold">
          Related tailwind units
        </p>
        <div class="grid grid-cols-2 gap-x-4">
          <p>Font size:</p>
          <Value :value="fontSize" />
          <p>Breakpoint:</p>
          <Value :value="breakpoint" />
          <p>Max-width:</p>
          <Value :value="width" />
          <p>Spacing <small class="text-surface-600 dark:text-surface-400">
            (padding, margin, width, height...)
          </small>:</p>
          <Value :value="spacing" />
          <p>Border radius:</p>
          <Value :value="radius" />
        </div>
      </div>
    </div>
  </div>
</template>
