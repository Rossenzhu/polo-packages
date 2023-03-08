import { onMounted, onBeforeUnmount, getCurrentInstance } from "vue";

export default function useEvent(eventName, callback) {
  const app = getCurrentInstance();
  const $bus = app.appContext.config.globalProperties.$bus;

  onMounted(() => {
    $bus.$on(eventName, callback);
  });

  onBeforeUnmount(() => {
    $bus.$off(eventName, callback);
  });
}
