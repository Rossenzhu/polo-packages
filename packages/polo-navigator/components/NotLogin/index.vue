<template>
  <div :class="[s.notLoginCont, block && s.block]">
    <a :class="[s.btn, s.signup]" href="/signup">
      {{ $t("signup") }}
    </a>
    <a :class="[s.btn, s.login]" href="/login">
      {{ $t("login") }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    block: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module="s">
@import "./style.module.scss";
</style>
