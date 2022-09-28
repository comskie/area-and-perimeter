<script setup lang="ts">
import { ref } from "vue";

const aSide = ref<number>(0);

function getArea() {
  return Number(aSide.value) * Number(aSide.value);
}

function getPerimeter() {
  return 4 * Number(aSide.value);
}
</script>

<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="flex items-center gap-4">
        <span class="text-xl italic">a</span> <span class="text-sm">side</span>
      </div>

      <input class="col-span-2 rounded-md" v-model="aSide" type="text" />
    </div>
    <div
      v-if="aSide !== null && Number(aSide) !== 0 && !isNaN(aSide)"
      class="mt-4"
    >
      Area = {{ getArea() }}

      <div>Perimeter = {{ getPerimeter() }}</div>
    </div>
  </div>
</template>
