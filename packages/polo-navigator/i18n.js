import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ja",
  messages: {
    en: {
      hello: "Hello justin!",
    },
    ja: {
      hello: "ジャスティンをファック",
    },
  },
});

export default i18n;
