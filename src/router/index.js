import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
