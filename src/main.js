import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

let app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
