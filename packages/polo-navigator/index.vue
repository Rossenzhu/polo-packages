<template>
  <header :class="[s.header]" id="polo-navigator">
    <Nav :class="s.nav" :bodyWidth="bodyWidth" />
    <NotLogin v-if="bodyWidth > 1024 && !fetchingProfile && !isLogin" />
    <Login v-if="bodyWidth > 920 && isLogin" />
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
const NotLogin = defineAsyncComponent(() =>
  import("./components/NotLogin/index.vue")
);
const Login = defineAsyncComponent(() =>
  import("./components/Login/index.vue")
);
</script>

<style lang="scss" module="s">
@import "./index.modules.scss";
</style>
