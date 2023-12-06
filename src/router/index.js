import Vue from "vue";
import VueRouter from "vue-router";
import UsersList from "@/views/UsersList.vue";
import Profile from "@/views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/userslist",
    name: "userslist",
    component: UsersList,
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;
