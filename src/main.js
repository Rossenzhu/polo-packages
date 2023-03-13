import { createApp } from "vue";
import App from "./App.vue";
import { eventBus } from "../packages/polo-navigator/main";
// import { eventBus } from "@lib/polo-navigator";
// import "@lib/style.css";

const app = createApp(App);

app.config.globalProperties.$bus = eventBus;

app.mount("#app");
