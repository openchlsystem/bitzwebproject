import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
// Import individual icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// OR import the entire set
// import 'bootstrap-icons/bootstrap-icons.css';



/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faTwitter,
  faFacebook,
  faInstagram,
  faTiktok,
  faFacebookMessenger,
  faWhatsapp
);

createApp(App)
  .use(router)



  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
