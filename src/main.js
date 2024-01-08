import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupPinia } from "./piniaSetup";

const app = createApp(App);

setupPinia(app);

app.mount("#app");
