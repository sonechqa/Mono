import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line
import styles from "./styles/main.scss";
import VueMq from "vue-mq";

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    sm: 321,
    md: 769,
    lg: 1920,
  },
  defaultBreakpoint: "lg",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
