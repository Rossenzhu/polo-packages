import { computed } from "vue";
import { useI18n } from "vue-i18n";
import cookie from "js-cookie";
import {
  COOKIE_KEY_LANGUAGE,
  CURRENT_HOST,
} from "@pkg/polo-navigator/constant";

const useOverideI18n = () => {
  const { locale } = useI18n();

  const setLanguage = (lang) => {
    locale.value = lang;
    cookie.set(COOKIE_KEY_LANGUAGE, lang, {
      domain: [process.env.NODE_ENV !== "development" && ".", CURRENT_HOST]
        .filter(Boolean)
        .join(""),
    });
  };

  const currentLanguage = computed(() => {
    return locale.value.split("-")[0].toUpperCase();
  });

  return {
    currentLanguage,
    setLanguage,
  };
};

export default useOverideI18n;
