// 导入axios
import axios from 'axios'

import store from '../store'
import router from '../router'

import { ElMessage } from 'element-plus'

// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (err) => {
    console.log(err)
  }
)

// 响应拦截
service.interceptors.response.use(
  (res) => {
    return res ? res.data : res
  },
  (err) => {
    console.log(err)
    if (err.response.status === '401') {
      ElMessage.error('请先登录')
      router.push({ path: '/login' })
    }
    Notify(
      err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
    )
  }
)
// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired && store.state.text === false) {
    console.log('未验证，请先登录')
    ElMessage.error('您还没有登录，请先登录')
    return next('/login')
  } else {
    console.log('已验证')
    next()
  }
})

// 导出axios实例对象
export default request
