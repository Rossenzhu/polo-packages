import svgicon from "./svg.vue";

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("./svg/", false, /\.svg$/);
requireAll(req);

export const installSvgIcon = (app) => {
  app.component("svgicon", svgicon);
};
