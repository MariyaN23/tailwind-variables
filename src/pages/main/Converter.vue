<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { computed, ref } from "vue";
import { getUnitName } from "./helpers"
import { borderRadius, breakpoints, fontSizes, spacingValues, } from "@/pages/main/tailwind-units.ts";
import Value from "@/pages/main/value.vue";

const basePixel = ref(16)
const baseSpacing = ref(0.25)
const pixels = ref(basePixel.value)
const rem = computed({
  get() {
    return pixels.value / basePixel.value
  },
  set(newValue) {
    pixels.value = newValue * basePixel.value
  }
})
const fontSize = computed(() => getUnitName(fontSizes, rem.value))
const breakpoint = computed(() => getUnitName(breakpoints, pixels.value))
const spacing = computed(() => {
  const value = baseSpacing.value * rem.value * basePixel.value
  return getUnitName(spacingValues, value)
})
const radius = computed(() => getUnitName(borderRadius, rem.value))
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
            v-model="rem"
            mode="decimal"
            :max-fraction-digits="3"
        />
      </InputGroup>
      <div>
        <p>
          Related tailwind units
        </p>
        <div class="grid grid-cols-2">
          <p>Font size:</p>
          <Value :value="fontSize" />
          <p>Breakpoint:</p>
          <Value :value="breakpoint" />
          <p>Spacing <small>(padding, margin, width, height...)</small>:</p>
          <Value :value="spacing" />
          <p>Border radius:</p>
          <Value :value="radius" />
        </div>
      </div>
    </div>
  </div>
</template>
