import { ref } from "vue";
import {
  COOKIE_KEY_CURRENCY_LOCALE,
  SUPPORT_BASE_CURRENCIES,
} from "../constant";
import cookie from "js-cookie";

const useCurrency = () => {
  const currency = ref(
    cookie.get(COOKIE_KEY_CURRENCY_LOCALE) || SUPPORT_BASE_CURRENCIES[0]
  );

  const setCurrency = (value) => {
    currency.value = value;
    cookie.set(COOKIE_KEY_CURRENCY_LOCALE, value, {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      domain: ".poloniex.com",
    });
  };
  return [currency, setCurrency];
};

export default useCurrency;
