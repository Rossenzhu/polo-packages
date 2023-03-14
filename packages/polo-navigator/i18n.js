import { createI18n } from "vue-i18n";
import cookie from "js-cookie";

function loadLocaleMessages() {
  const locales = import.meta.globEager("./locales/*.json");
  const messages = {};

  for (const path in locales) {
    messages[path.replace("./locales/", "").replace(".json", "")] =
      locales[path].default;
  }

  return messages;
}

const i18n = createI18n({
  globalInjection: true,
  locale:
    cookie.get("x-lang-override") ||
    document.querySelector("html")?.getAttribute("lang"),
  legacy: false,
  fallbackLocale: "en-us",
  messages: loadLocaleMessages(),
  missingWarn: false, // 禁止本地失败警告
  fallbackWarn: false, // 禁止本地回退失败警告
  warnHtmlMessage: false,
});

export default i18n;
