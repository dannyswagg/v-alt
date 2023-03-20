import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from "../views/DetailsView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/repos",
      name: "repos",
      component: () =>import("../views/ReposView.vue"),
    },
    {
      path: "/repos/:repoName",
      component: DetailsView,
      name: "DetailsView"
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: "page-not-found",
      component: () =>import("../views/ErrorView.vue")
    },
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "/404"
    // },
    {
      path: "/:catchAll(.*)",
      name:"page-not-found",
      component: () =>import("../views/ErrorView.vue")
    },
  ],
})

export default router
