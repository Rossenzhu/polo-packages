import { createApp } from "vue";
import i18n from "./i18n";
import eventBus, { events } from "./bus";
import App from "./index.vue";

let navigator = document.querySelector("#vue-app-header");

if (!navigator) {
  navigator = document.createElement("div");
  navigator.setAttribute("id", "vue-app-header");
  document.body.insertBefore(navigator, document.body.childNodes[0]);
}

const app = createApp(App).use(i18n).mount(navigator);

export { eventBus, app, i18n, events };
