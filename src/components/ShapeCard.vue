<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  shape: {
    type: String as PropType<"square" | "rectangle" | "triangle">,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const imagePath = new URL(`../assets/icons/${props.shape}.png`, import.meta.url)
  .href;
</script>

<template>
  <button
    ref="target"
    :class="[
      'flex cursor-pointer select-none flex-col items-center justify-center space-y-4 rounded-md border-indigo-600 bg-indigo-500 p-4  shadow-indigo-200 transition-all duration-200  ease-out dark:bg-indigo-600 dark:shadow-indigo-600/30',
      isActive
        ? '-translate-y-2 scale-105 font-bold shadow-xl'
        : 'shadow hover:-translate-y-1 hover:shadow-lg',
    ]"
  >
    <img class="mt-2" :src="imagePath" :alt="shape" height="80" width="80" />
    <div>
      <span
        class="font text-lg capitalize text-stone-100 dark:text-white sm:text-2xl"
        >{{ shape }}</span
      >
    </div>
  </button>
</template>
