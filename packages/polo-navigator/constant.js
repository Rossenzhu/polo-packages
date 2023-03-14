const { hostname } = window.location;

export const COOKIE_KEY_LANGUAGE = "x-lang-override";
export const COOKIE_KEY_LAST_SYMBOL = "x-spot-last-symbol";
export const COOKIE_KEY_DARK_MODE = "x-dark-mode-override";
export const COOKIE_KEY_CURRENCY_LOCALE = "preferredCurrencyLocale";

export const COOKIE_KEY_FAVOR_SYMBOLS = "favor-symbols";
export const COOKIE_KEY_KLINE_INTERVAL = "x-interval";
export const COOKIE_KEY_KLINE_INTERVAL_FAVOR = "x-interval-favor";

export const STORAGE_KEY_SYMBOL = "polo-symbol-list";
export const STORAGE_KEY_CURRENCIES = "polo-currencies-list";

export const SUPPORT_LANGUAGES = [
  "en-us",
  "zh-cn",
  "zh-tw",
  "ru-ru",
  "vi-vn",
  "tr-tr",
  "ko-kr",
  "ja-jp",
  "th-th",
  "es-es",
  "pt-br",
  "id",
  "hi-in",
];

export const DEFAULT_LANGUAGE = "en-us";

export const IS_CN_DOMAIN = !/poloniex\./.test(hostname);

// This regex test will be null for any hostname without a subdomain (test.poloniex.com vs poloniex.com)
const hostNameMatch = hostname.match(/[^\\.]+\.[^\\.]+$/);
export const CURRENT_HOST = hostNameMatch ? hostNameMatch[0] : hostname;

export const SUPPORT_BASE_CURRENCIES = [
  "USD",
  "CNY",
  "RUB",
  "EUR",
  "JPY",
  "KRW",
  "BTC",
  "INR",
];

export const KLINE_INTERVAL_MAP = {
  MINUTE_1: "1",
  MINUTE_5: "5",
  MINUTE_10: "10",
  MINUTE_15: "15",
  MINUTE_30: "30",
  HOUR_1: "60",
  HOUR_2: "120",
  HOUR_4: "240",
  HOUR_6: "360",
  HOUR_12: "720",
  DAY_1: "1D",
  DAY_3: "3D",
  WEEK_1: "1w",
  MONTH_1: "1m",
};

export const WEBSOCKET_INTERVAL_PREFIX = "CANDLES_";

export const ORDER_SIDE = ["BUY", "SELL"];
export const ORDER_TYPE = ["LIMIT", "MARKET", ["STOP_LIMIT", "STOP_MARKET"]];

export const AMOUNT_ROUND_LENGTH = 6;
export const PRICE_ROUND_LENGHTH = 2;
export const ORDER_DEPTH_LIST = ["15", "30", "50", "100"];
export const POLLING_INTERVAL = 5 * 1000;

// The `orderType` field of the details of the Take Profit and Stop Loss orders
export const SMART_ORDER_TYPE = ["STOP", "STOP_LIMIT"];

// API request headers `lang` field matcher,
// Use the priority matching principle when there are multiple
export const API_REQUEST_HEADERS_LANG_MATCHER = [
  ["en-us", { regexp: /^en(-[a-z]+)?$/i, value: "en" }],
  { regexp: /^es(-[a-z]+)?$/i, value: "es" },
  ["ru-ru", { regexp: /^ru(-[a-z]+)?$/i, value: "ru" }],
  ["tr-tr", { regexp: /^tr(-[a-z]+)?$/i, value: "tr" }],
  ["pt-br", { regexp: /^pt(-[a-z]+)?$/i, value: "pt" }],
  { regexp: /^th(-[a-z]+)?$/i, value: "th" },
  { regexp: /^ko(-[a-z]+)?$/i, value: "ko" },
  { regexp: /^ja(-[a-z]+)?$/i, value: "ja" },
  [
    "zh-Hant",
    "zh-tw",
    "zh-Hans",
    { regexp: /^zh(-[a-z]+)?$/i, value: "zh-cn" },
  ],
  ["vi-vn", { regexp: /^vi(-[a-z]+)?$/i, value: "vi" }],
];

// App locale Mappings
export const APP_LOCALE_MAP = {
  en: "en-us",
  ru: "ru-ru",
  tr: "tr-tr",
  th: "th-th",
  ko: "ko-kr",
  ja: "ja-jp",
  "zh-Hant": "zh-tw",
  "zh-Hans": "zh-cn",
  vi: "vi-vn",
};

export const LOGIN_CONTXT = "login-contxt";
export const SIGNUP_CONTXT = "signup-contxt";
export const LOGIN_REFERRER = "login-referrer";
export const SIGNUP_SUCCESS = "signup-success";

export const STORAGE_KEY_LAST_LOGIN_UNAME = "last-login-uname";
export const STORAGE_KEY_ADDRESS_BOOK_TIP = "polo-address-book-tip";

export const STORAGE_KEY_ORDER_SWITCH = "polo-order-switch";
export const STORAGE_KEY_AUTO_BORROW = "polo-auto-borrow";
export const STORAGE_KEY_KLINE_SYMBOLS = "polo-kline-symbols";
export const STORAGE_KEY_FOOT_SELECT = "polo-foot-select";
export const STORAGE_KEY_USER_GUIDE = "polo-user-guide";

export const COOKIE_KEY_LOW_CROSS_RATIO = "polo-low-cross-ratio";
export const STORAGE_KEY_WALLET_MARGIIN_MODE = "polo-wallet-margin-mode";

export const fiatCurrencySymbol = {
  CNY: "￥",
  EUR: "€",
  GBP: "￡",
  JPY: "￥",
  KRW: "₩",
  USD: "$",
  INR: "₹",
  RUB: "₽",
};
