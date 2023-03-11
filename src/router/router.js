import Home from '../components/Home.vue';
import Navbar from '../components/Nav.vue';
import Notfound from "../components/Notfound.vue";
import { createWebHistory, createRouter } from "vue-router";


const routes = [
    { path: "/", name: "Home", component: Home },
  {path: '/home', redirect: '/'},
  { path: "/counter", name: "Navbar", component: Navbar },
  { path: "/:catchAll(.*)", name: "Notfound", component: Notfound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;