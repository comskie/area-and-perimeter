<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  shape: {
    type: String as PropType<"square" | "rectangle" | "triangle">,
    required: true,
  },
});

const imagePath = new URL(`../assets/icons/${props.shape}.png`, import.meta.url)
  .href;

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 12;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2); // handles x-axis
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); // handles y-axis
  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
  <div
    ref="target"
    :style="{
      transform: cardTransform,
    }"
    class="flex select-none flex-col items-center justify-center space-y-4 rounded-md border p-4 shadow-xl backdrop-blur-md transition-all duration-200 ease-out dark:border-indigo-600"
  >
    <img class="p-2" :src="imagePath" :alt="shape" height="80" width="80" />
    <div>
      <span class="font text-2xl capitalize">{{ shape }}</span>
    </div>
  </div>
</template>
