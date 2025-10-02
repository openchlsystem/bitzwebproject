import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
// Import individual icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// OR import the entire set
// import 'bootstrap-icons/bootstrap-icons.css';




createApp(App)
  .use(router)

  .mount("#app");
