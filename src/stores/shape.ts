import { defineStore } from "pinia";
import { useSessionStorage } from "@vueuse/core";

type ShapeString = "square" | "rectangle" | "triangle";

export const useShapeStore = defineStore("shape", () => {
  const shape = useSessionStorage("shape", <ShapeString>"square");

  function setShape(newShape: ShapeString) {
    shape.value = newShape;
  }

  function isShape(shapeToCheck: ShapeString) {
    return shape.value === shapeToCheck;
  }

  return { setShape, isShape };
});
