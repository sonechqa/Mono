import Vue from "vue";
import VueRouter from "vue-router";
import Monevac from "../views/Monevac.vue";
import Contacts from "../views/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "monevac",
    component: Monevac,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
