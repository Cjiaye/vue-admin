import router from './router'
import store from './store'
//未登录时可以访问的页面
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  //获取token
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!store.getters.hasUserInfo) {
        //调用信息接口
        const res = await store.dispatch('user/getUserInfo')
        if (res) {
          console.log(res)
          return next(to.path)
        } else {
          next('/login')
        }
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
