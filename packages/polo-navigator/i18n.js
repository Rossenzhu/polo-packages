import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ja",
  messages: {
    en: {
      hello: "Hello",
    },
    ja: {
      hello: "こんにちは",
    },
  },
});

export default i18n;
