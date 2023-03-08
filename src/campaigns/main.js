import { createApp } from "vue";
import App from "./App.vue";
import { eventBus } from "@lib/polo-navigator";

import "@lib/style.css";

const app = createApp(App);

app.config.globalProperties.$bus = eventBus;

console.log({ PoloNavigator });

app.mount("#app");
