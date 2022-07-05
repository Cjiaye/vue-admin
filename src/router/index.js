import { createRouter, createWebHashHistory } from 'vue-router'
import HomeLayout from '@/layout/index'
import roleList from './modules/sys-roles'
import userList from './modules/sys-users'
import menuList from './modules/sys-menus'
import dictList from './modules/sys-dicts'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: '<home-outlined/>'
        },
        component: () => import('@/views/index/index')
      }
    ]
  }
]

export const privateRoute = [dictList, menuList, roleList, userList]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...privateRoute]
})

export default router
