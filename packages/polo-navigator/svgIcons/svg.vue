<template>
  <svg class="svgicon" aria-hidden="true" :style="style">
    <use :xlink:href="`#${props.name}`"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 0,
  },
  height: {
    type: [Number, String],
    default: 0,
  },
});

const style = computed(() => {
  if (!props.width || !props.height) return {};
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };
});
</script>

<style>
.svgicon {
  fill: currentColor;
  overflow: hidden;
  stroke-width: 0;
  outline: none;
}
</style>
