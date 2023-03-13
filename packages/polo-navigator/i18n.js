import { createI18n } from "vue-i18n";
import cookie from "js-cookie";
import messages from "./locales";

const i18n = createI18n({
  locale:
    cookie.get("x-lang-override") ||
    document.querySelector("html").getAttribute("lang"),
  legacy: false,
  fallbackLocale: "en-us",
  messages,
  missingWarn: false, // 禁止本地失败警告
  fallbackWarn: false, // 禁止本地回退失败警告
  warnHtmlMessage: false,
});

export default i18n;
