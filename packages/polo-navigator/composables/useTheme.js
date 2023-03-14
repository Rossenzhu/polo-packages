import { ref } from "vue";
import { COOKIE_KEY_DARK_MODE } from "../constant";
import cookie from "js-cookie";

const useTheme = () => {
  const isDark = ref(cookie.get(COOKIE_KEY_DARK_MODE) === "1");

  if (isDark.value) {
    document.body.classList.add("dark-theme");
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value;

    if (isDark.value) {
      document.body.classList.add("dark-theme");
      cookie.set(COOKIE_KEY_DARK_MODE, "1", {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        domain: ".poloniex.com",
      });
    } else {
      document.body.classList.remove("dark-theme");
      cookie.remove(COOKIE_KEY_DARK_MODE, {
        domain: ".poloniex.com",
      });
    }
  };
  return [isDark, toggleTheme];
};

export default useTheme;
