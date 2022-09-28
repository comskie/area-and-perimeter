<script setup lang="ts">
import { ref } from "vue";

// const aSide = ref<number>(0);
const length = ref<number>(0);
const width = ref<number>(0);

function getArea() {
  return Number(width.value) * Number(length.value);
}

function getPerimeter() {
  return 2 * (Number(length.value) + Number(width.value));
}
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-y-2">
      <div class="flex items-center gap-4">
        <span class="text-xl italic">l</span>
        <span class="text-sm">Length</span>
      </div>

      <input class="col-span-2 rounded-md" v-model="length" type="text" />

      <div class="flex items-center gap-4">
        <span class="text-xl italic">w</span>
        <span class="text-sm">Width</span>
      </div>

      <input class="col-span-2 rounded-md" v-model="width" type="text" />
    </div>
    <div class="mt-4">
      Area = {{ getArea() }}

      <div>Perimeter = {{ getPerimeter() }}</div>
    </div>
  </div>
</template>
