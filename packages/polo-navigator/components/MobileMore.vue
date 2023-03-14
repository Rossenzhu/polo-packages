<template>
  <div>
    <div @click="() => toggleMore()" :class="showMore && s.expand">
      <slot name="name" />
    </div>
    <div v-if="showMore" :class="s.subMoreCont"><slot name="item" /></div>
  </div>
</template>

<script>
import { useToggle } from "../use";
export default {
  setup() {
    const [showMore, toggleMore] = useToggle(false);
    return {
      showMore,
      toggleMore,
    };
  },
};
</script>

<style lang="scss" module="s">
@import "../index.modules.scss";
</style>
