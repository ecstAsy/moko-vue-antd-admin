import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  base: "/moko-vue-antd-admin",
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less",
        }),
      ],
    }),
    viteMockServe({
      // default
      mockPath: "mock",
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#7367F0",
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: /^@\//, replacement: `${path.resolve(__dirname, "./src")}/` },
    ],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
});
