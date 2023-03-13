<template>
  <i :class="[s.icon, s[_name]]" />
</template>
<script>
import { computed } from "vue";
import { EXIST_ICON } from "./EXIST_ICON";
export default {
  props: {
    name: {
      type: String,
      default: "spot",
    },
  },
  setup() {
    const _name = computed(({ name }) => {
      if (EXIST_ICON.concat(["blank"]).includes(name)) {
        return name;
      } else {
        console.warn(`[component] No ${name} icon`);
        return "spot";
      }
    });
    return { _name };
  },
};
</script>
<style lang="scss" module="s">
@import "./icon.module.scss";
.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
  &.blank {
    background-image: none;
  }
}
</style>
