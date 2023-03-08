import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    vue(),

    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, "./lib") + "/[!.]*",
          dest: "./lib",
        },
      ],
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
      "@nav": fileURLToPath(new URL("./navigator", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },

  define: {
    "process.env": {},
  },
});
