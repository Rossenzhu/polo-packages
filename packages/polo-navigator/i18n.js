import { createI18n } from "vue-i18n";
import cookie from "js-cookie";
import messages from "./locales";

console.log({ messages });

const i18n = createI18n({
  locale:
    cookie.get("x-lang-override") ||
    document.querySelector("html").getAttribute("lang"),
  legacy: false,
  fallbackLocale: "en-us",
  messages,
});

export default i18n;
