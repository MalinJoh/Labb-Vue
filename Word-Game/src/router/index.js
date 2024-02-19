
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Game from '../pages/TheGame.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Game',
      component: Game
    }
  ]
})

export default router
