<script setup lang="ts">
import { computed, ref } from "vue";

const aSide = ref(0);
const bBase = ref(0);
const cSide = ref(0);
const hbHeight = ref(0);
const isSolvingArea = ref(true);

const area = computed(() => (Number(bBase.value) * Number(hbHeight.value)) / 2);
const perimeter = computed(
  () => Number(aSide.value) + Number(bBase.value) + Number(cSide.value)
);
</script>

<template>
  <div>
    <div>
      <span>Solve for</span>
      <button
        :class="[
          'ml-1 underline decoration-dotted underline-offset-4',
          isSolvingArea ? 'font-semibold no-underline' : 'hover:bg-slate-100',
        ]"
        @click="isSolvingArea = true"
      >
        Area
      </button>
      or
      <button
        :class="[
          'ml-1 underline decoration-dotted underline-offset-4',
          !isSolvingArea ? 'font-semibold no-underline' : 'hover:bg-slate-100',
        ]"
        @click="isSolvingArea = false"
      >
        Perimeter
      </button>
    </div>

    <div v-if="isSolvingArea" class="mt-4">
      <div class="grid grid-cols-3 gap-y-2">
        <div class="flex items-center gap-4">
          <span class="text-xl italic">b</span>
          <span class="text-sm">Base</span>
        </div>

        <input class="col-span-2 rounded-md" v-model="bBase" type="text" />

        <div class="flex items-center gap-4">
          <span class="text-xl italic">h<sub>b</sub></span>
          <span class="text-sm">Height</span>
        </div>

        <input class="col-span-2 rounded-md" v-model="hbHeight" type="text" />
      </div>
      <div class="mt-4">Area = {{ area }}</div>
    </div>
    <div v-if="!isSolvingArea" class="mt-4">
      <div class="grid grid-cols-3 gap-y-2">
        <div class="flex items-center gap-4">
          <span class="text-xl italic">a</span>
          <span class="text-sm">Side</span>
        </div>

        <input class="col-span-2 rounded-md" v-model="aSide" type="text" />

        <div class="flex items-center gap-4">
          <span class="text-xl italic">b</span>
          <span class="text-sm">Base</span>
        </div>

        <input class="col-span-2 rounded-md" v-model="bBase" type="text" />

        <div class="flex items-center gap-4">
          <span class="text-xl italic">c</span>
          <span class="text-sm">Side</span>
        </div>

        <input class="col-span-2 rounded-md" v-model="cSide" type="text" />
      </div>
      <div class="mt-4">Perimeter = {{ perimeter }}</div>
    </div>
  </div>
</template>
