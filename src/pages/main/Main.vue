<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { computed, ref } from "vue";
import { getUnitName } from "./helpers"
import { breakpoints, fontSizes } from "@/pages/main/tailwind-units.ts";
import Value from "@/pages/main/value.vue";

const basePixel = ref(16)
const pixels = ref(basePixel.value)
const rem = computed({
  get() {
    return pixels.value / basePixel.value
  },
  set(newValue) {
    pixels.value = newValue * basePixel.value
  }
})
const fontSize = computed(() => getUnitName(fontSizes, pixels.value))
const breakpoint = computed(() => getUnitName(breakpoints, pixels.value))
</script>

<template>
  <div class="space-y-12">
    <div class="flex flex-col gap-2 place-self-end">
      <label
          for="rootElement"
          class="text-sm"
      >
        Root element size
      </label>
      <InputNumber
          id="rootElement"
          v-model="basePixel"
          size="small"
          :min="0"
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
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <span>rem</span>
        </InputGroupAddon>
        <InputNumber
            id="rem"
            v-model="rem"
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
        </div>
      </div>
    </div>
  </div>
</template>
