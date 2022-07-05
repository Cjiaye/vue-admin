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
    component: () => import('../views/index'),
    children: [
      {
        path: '/sys-users',
        name: 'sys-users',
        component: () => import('../views/sys-users')
      },
      {
        path: '/sys-roles',
        name: 'sys-roles',
        component: () => import('../views/sys-roles')
      },
      {
        path: '/sys-menus',
        name: 'sys-menus',
        component: () => import('../views/sys-menus')
      },
      {
        path: '/sys-dicts',
        name: 'sys-dicts',
        component: () => import('../views/sys-dicts')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
