<script setup lang="ts">
import ShapeCard from "../components/ShapeCard.vue";
import { useDark, useToggle } from "@vueuse/core";
import SquareCalculator from "../components/SquareCalculator.vue";
import RectangleCalculator from "../components/RectangleCalculator.vue";
import TriangleCalculator from "../components/TriangleCalculator.vue";
import { useShapeStore } from "@/stores/shape";
import { onMounted, ref } from "vue";
import autoAnimate from "@formkit/auto-animate";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { isShape, setShape } = useShapeStore();

const calculator = ref();

onMounted(() => {
  autoAnimate(calculator.value);
});
</script>
<template>
  <div
    class="min-h-screen bg-gradient-to-t from-indigo-100 dark:bg-neutral-800 dark:from-inherit dark:text-white"
  >
    <header class="absolute inset-x-0 top-0">
      <div class="container flex justify-end p-4">
        <button @click="toggleDark()" class="p-2 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="hidden h-6 w-6 dark:block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="block h-6 w-6 dark:hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      </div>
    </header>
    <main
      class="container flex h-screen min-h-screen items-center justify-center transition-all ease-linear"
    >
      <div
        class="grid h-screen min-h-screen w-full max-w-lg grid-rows-2 gap-12 px-4 py-12"
      >
        <div class="grid grid-cols-3 place-content-end gap-2 sm:gap-4">
          <ShapeCard
            shape="rectangle"
            @click="setShape('rectangle')"
            :isActive="isShape('rectangle')"
          />
          <ShapeCard
            shape="square"
            @click="setShape('square')"
            :isActive="isShape('square')"
          />
          <ShapeCard
            shape="triangle"
            @click="setShape('triangle')"
            :isActive="isShape('triangle')"
          />
        </div>

        <div ref="calculator">
          <RectangleCalculator v-if="isShape('rectangle')" />
          <SquareCalculator v-if="isShape('square')" />
          <TriangleCalculator v-if="isShape('triangle')" />
        </div>
      </div>
    </main>
    <footer>
      <div class="flex justify-end px-2 pb-1">
        <a
          href="https://www.flaticon.com/free-icons/shapes"
          title="shapes icons"
          class="underline decoration-dotted underline-offset-2"
        >
          <span class="text-sm">
            Shapes icons created by Pixel perfect - Flaticon
          </span>
        </a>
      </div>
    </footer>
  </div>
</template>
