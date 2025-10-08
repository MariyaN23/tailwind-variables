<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { computed, ref } from "vue";
import { getFontSizeName } from "./helpers"

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
const tailwindValue = computed(() => getFontSizeName(pixels.value))
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
        <div class="flex gap-2">
          <p>Font size:</p>
          <span v-if="tailwindValue" class="font-semibold text-primary-500">
            {{ tailwindValue }}
          </span>
          <div v-else class="flex flex-col font-semibold text-surface-500">
            <span>{{ `text-[${pixels}px]` }}</span>
            <span>{{ `text-[${rem.toFixed(3)}rem]` }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
