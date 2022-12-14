import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import CharacterView from '../pages/CharacterView.vue'
import DiscographyView from '../pages/DiscographyView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/album',
      name: 'album',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/DiscographyView.vue')
    }
  ]
})

export default router
