import { createRouter, createWebHistory } from "vue-router";
import home from "@/pages/home.vue";
import profile from "@/pages/profile.vue";
import contact from "@/pages/contact.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/profile", name: "profile", component: profile },
  { path: "/contact", name: "contact", component: contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
