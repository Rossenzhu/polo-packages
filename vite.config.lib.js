import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: resolve(__dirname, "./packages/polo-navigator/main.js"),
      name: "PoloNavigator",
      fileName: "polo-navigator",
      formats: ["es", "cjs", "umd"],
    },

    cssCodeSplit: false,

    outDir: "lib",

    manifest: true,
  },

  define: {
    "process.env": {},
  },

  resolve: {
    alias: {
      "@pkg": fileURLToPath(new URL("./packages", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "~@pkg/assets/styles/_variables.scss";
          @import "~@pkg/assets/styles/_mixins.scss";
        `,
      },
    },
  },
});
