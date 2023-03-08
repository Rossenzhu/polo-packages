import emitter from "tiny-emitter/instance";

export const events = {
  CUSTOM_EVENT: "CUSTOM_EVENT",
  PROFILE_CHANGE: "PROFILE_CHANGE",
};

export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
};
