import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupPinia } from "./piniaSetup";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

const app = createApp(App);

setupPinia(app);

app.use(autoAnimatePlugin);

app.mount("#app");
