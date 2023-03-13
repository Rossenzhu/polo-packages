<template>
  <header :class="[s.wrapper]" id="polo-navigator">
    <Nav :class="s.nav" :bodyWidth="bodyWidth" />
  </header>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";
import eventBus, { events } from "./bus";
import { useScreenFix } from "./composables";

const theme = ref("light");

const handleToggle = () => {
  const newTheme = theme.value === "light" ? "dark" : "light";
  theme.value = newTheme;

  eventBus.$emit(events.CUSTOM_EVENT, newTheme);
};

const navStyle = computed(() =>
  theme.value === "light"
    ? { backgroundColor: "indianred", color: "#fff" }
    : { backgroundColor: "lightblue", color: "indianred" }
);

const { widthClassname, bodyWidth } = useScreenFix();

onMounted(() => {
  nextTick(() => {
    eventBus.$emit(events.PROFILE_CHANGE, {
      userID: 111,
    });
  });
});

const { t } = useI18n();

const Nav = defineAsyncComponent(() => import("./components/Nav/index.vue"));
</script>

<style lang="scss" module="s">
.wrapper {
  padding: 12px;

  nav {
    display: flex;

    li {
      list-style: none;

      & + li {
        margin-left: 12px;
      }
    }
  }
}
</style>
