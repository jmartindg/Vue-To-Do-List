import { createPinia } from "pinia";

export const pinia = createPinia();

export const setupPinia = (app) => {
  app.use(pinia);
};
