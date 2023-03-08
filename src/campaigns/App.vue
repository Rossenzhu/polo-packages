<template>
  <div class="app">
    <h1>我是业务Campaigns</h1>
  </div>
</template>

<script setup>
import useEvent from "../useEvent";

useEvent("CUSTOM_EVENT", (...args) => {
  console.log("campaigns callback here");
  console.log({ args });
});

useEvent("PROFILE_CHANGE", (profile) => {
  console.log({ profile });
});
</script>

<style lang="scss" scoped></style>
