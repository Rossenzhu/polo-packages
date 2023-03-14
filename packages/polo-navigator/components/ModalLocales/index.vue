<template>
  <div :class="s.shadow">
    <div :class="s.locale">
      <div :class="s.tabs">
        <div :class="[s.tab, currentTab && s.current]" @click="setTab(true)">
          {{ $t("language") }}
        </div>
        <div :class="[s.tab, !currentTab && s.current]" @click="setTab(false)">
          {{ $t("currency") }}
        </div>
        <div :class="s.closeCont" @click="close">
          <i :class="s.close" />
        </div>
      </div>
      <div :class="s.ctx" v-if="currentTab">
        <span
          v-for="(lang, index) in SUPPORT_LANGUAGE"
          :key="lang"
          :class="[s.item, (index + 1) % 3 === 0 && s.nmr]"
          @click="setLanguage(lang)"
        >
          {{ $t(`langs.${lang}`) }}
        </span>
      </div>
      <div :class="s.ctx" v-else>
        <span
          v-for="(currency, index) in SUPPORT_BASE_CURRENCIES"
          :key="currency"
          :class="[s.item, (index + 1) % 3 === 0 && s.nmr]"
          @click="() => handleChange(currency)"
        >
          {{ currency }} - {{ fiatCurrencySymbol[currency] }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { SUPPORT_LANGUAGE, setLanguage } from "../../i18n";
import { SUPPORT_BASE_CURRENCIES } from "../../constant";
import { fiatCurrencySymbol } from "../../lib/common/utils";
import { useToggle } from "../../use";

export default {
  props: {
    setCurrency: Function,
  },
  setup(props) {
    const [currentTab, setTab] = useToggle(true);

    return {
      currentTab,
      setTab,
      SUPPORT_LANGUAGE,
      setLanguage,
      close() {
        this.$emit("close");
      },
      handleChange(currency) {
        props.setCurrency(currency);
        this.$emit("close");
      },
      SUPPORT_BASE_CURRENCIES,
      fiatCurrencySymbol,
    };
  },
};
</script>

<style lang="scss" module="s">
@import "./style.module.scss";
</style>
