import { resolve, dirname } from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./packages/polo-navigator/locales/**"
      ),
    }),
  ],

  build: {
    cssCodeSplit: false,

    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        futures: resolve(__dirname, "futures.html"),
        campaigns: resolve(__dirname, "campaigns.html"),
      },
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@lib": fileURLToPath(new URL("./lib", import.meta.url)),
      "@pkg": fileURLToPath(new URL("./packages", import.meta.url)),
      "@nav": fileURLToPath(new URL("./navigator", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },

  define: {
    "process.env": {},
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@pkg/assets/styles/_variables.scss";
          @import "@pkg/assets/styles/_mixins.scss";
        `,
      },
    },
  },
});
