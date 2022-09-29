<script setup lang="ts">
import { computed, ref } from "vue";

const aSide = ref<number>();

const area = computed(() => Number(aSide.value) ** 2);
const perimeter = computed(() => 4 * Number(aSide.value));
</script>

<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="flex items-center gap-4">
        <span class="font-serif text-xl italic">a</span>
        <span class="text-sm">Side</span>
      </div>
      <input
        class="input col-span-2"
        v-model="aSide"
        type="text"
        placeholder="Enter value"
      />
    </div>
    <div v-if="aSide! > 0" class="mt-4">
      Area = {{ area }}

      <div>Perimeter = {{ perimeter }}</div>
    </div>
  </div>
</template>
