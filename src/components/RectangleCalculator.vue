<script setup lang="ts">
import { computed, ref } from "vue";

const length = ref<number>();
const width = ref<number>();

const area = computed(() => Number(length.value) * Number(width.value));
const perimeter = computed(
  () => 2 * (Number(length.value) + Number(width.value))
);
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-y-2">
      <div class="flex items-center gap-4">
        <span class="text-xl italic">l</span>
        <span class="text-sm">Length</span>
      </div>

      <input
        class="input col-span-2"
        v-model="length"
        type="text"
        placeholder="Enter value"
      />

      <div class="flex items-center gap-4">
        <span class="text-xl italic">w</span>
        <span class="text-sm">Width</span>
      </div>

      <input
        class="input col-span-2"
        v-model="width"
        type="text"
        placeholder="Enter value"
      />
    </div>
    <div v-if="length! > 0 && width! > 0" class="mt-4">
      Area = {{ area }}

      <div>Perimeter = {{ perimeter }}</div>
    </div>
  </div>
</template>
