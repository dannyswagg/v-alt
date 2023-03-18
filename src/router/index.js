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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "404",
    //   component: () =>import("../views/ErrorView.vue")
    // },
    {path: "/404",
    name: "page-not-found",
    component: () => import("../views/ErrorView.vue")
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404"
    }
  ],
})

export default router
