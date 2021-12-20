import { createApp } from "vue";
import * as Icons from "@ant-design/icons-vue";
import App from "./App.vue";
import components from "@/components";
import router from "@/router";
import { store, key } from "@/store";
import "@/styles/index.less";

import "@/permission";

const app = createApp(App);

Object.keys(Icons).forEach((icon) => {
  app.component(icon, Icons[icon as keyof typeof Icons]);
});

app.use(components).use(router).use(store, key).mount("#app");
