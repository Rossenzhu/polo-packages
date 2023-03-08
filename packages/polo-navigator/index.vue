<template>
  <div class="polo-navigator" :style="navStyle">
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>More</li>
    </nav>

    <div>{{ t("hello") }}</div>
    <button type="button" @click="handleToggle">Toggle</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";
import eventBus, { events } from "./bus";

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

onMounted(() => {
  nextTick(() => {
    eventBus.$emit(events.PROFILE_CHANGE, {
      userID: 111,
    });
  });
});

const { t } = useI18n();
</script>

<style lang="scss">
.polo-navigator {
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
