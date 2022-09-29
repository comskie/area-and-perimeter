<script setup lang="ts">
import { computed, ref } from "vue";

// perimeter
const perimeterASide = ref<number>();
const perimeterBBase = ref<number>();
const perimeterCSide = ref<number>();
// area
const areaBBase = ref<number>();
const areaHbHeight = ref<number>();

const isSolvingArea = ref(true);

const area = computed(
  () => (Number(areaBBase.value) * Number(areaHbHeight.value)) / 2
);
const perimeter = computed(
  () =>
    Number(perimeterASide.value) +
    Number(perimeterBBase.value) +
    Number(perimeterCSide.value)
);
</script>

<template>
  <div>
    <div>
      <span>Solve for</span>
      <button
        :class="[
          'ml-1 underline decoration-dotted underline-offset-4 transition-all ease-linear',
          isSolvingArea
            ? 'font-semibold no-underline'
            : 'hover:bg-slate-100 dark:hover:bg-indigo-800',
        ]"
        @click="isSolvingArea = true"
      >
        Area
      </button>
      or
      <button
        :class="[
          'ml-1 underline decoration-dotted underline-offset-4 transition-all ease-linear',
          !isSolvingArea
            ? 'font-semibold no-underline'
            : 'hover:bg-slate-100 dark:hover:bg-indigo-800',
        ]"
        @click="isSolvingArea = false"
      >
        Perimeter
      </button>
    </div>

    <div>
      <div v-if="isSolvingArea" class="mt-4">
        <div class="grid grid-cols-3 gap-y-2">
          <div class="flex items-center gap-4">
            <span class="text-xl italic">b</span>
            <span class="text-sm">Base</span>
          </div>

          <input
            class="input col-span-2"
            v-model="areaBBase"
            type="text"
            placeholder="Enter value"
          />

          <div class="flex items-center gap-4">
            <span class="text-xl italic">h<sub>b</sub></span>
            <span class="text-sm">Height</span>
          </div>
          <input
            class="input col-span-2"
            v-model="areaHbHeight"
            type="text"
            placeholder="Enter value"
          />
        </div>
        <div v-if="areaBBase! > 0 && areaHbHeight! > 0" class="mt-4">
          Area = {{ area }}
        </div>
      </div>

      <div v-if="!isSolvingArea" class="mt-4">
        <div class="grid grid-cols-3 gap-y-2">
          <div class="flex items-center gap-4">
            <span class="text-xl italic">a</span>
            <span class="text-sm">Side</span>
          </div>

          <input
            class="input col-span-2"
            v-model="perimeterASide"
            type="text"
            placeholder="Enter value"
          />

          <div class="flex items-center gap-4">
            <span class="text-xl italic">b</span>
            <span class="text-sm">Base</span>
          </div>

          <input
            class="input col-span-2"
            v-model="perimeterBBase"
            type="text"
            placeholder="Enter value"
          />

          <div class="flex items-center gap-4">
            <span class="text-xl italic">c</span>
            <span class="text-sm">Side</span>
          </div>

          <input
            class="input col-span-2"
            v-model="perimeterCSide"
            type="text"
            placeholder="Enter value"
          />
        </div>
        <div
          v-if="perimeterASide! > 0 && perimeterBBase! > 0 && perimeterCSide! > 0"
          class="mt-4"
        >
          Perimeter = {{ perimeter }}
        </div>
      </div>
    </div>
  </div>
</template>
