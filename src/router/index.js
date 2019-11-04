import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Home.vue";
import MenuActive from "../views/About.vue";
import Karyawan from "../component/Karyawan.vue";
import Kehadiran from "../component/Kehadiran.vue";
import Cuti from "../component/Cuti.vue";
import Gaji from "../component/Gaji.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/karyawan",
    name: "karyawan",
    component: Karyawan
  },
  {
    path: "/kehadiran",
    name: "kehadiran",
    component: Kehadiran
  },
  {
    path: "/cuti",
    name: "cuti",
    component: Cuti
  },
  {
    path: "/gaji",
    name: "gaji",
    component: Gaji
  },
  {
    path: "/menu-active",
    name: "menu-active",
    component: MenuActive,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
