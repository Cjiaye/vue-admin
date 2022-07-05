import axios from 'axios'

import loading from './loading'

import store from '../store'
import { ElMessage } from 'element-plus'
const instance = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000 // 超时时间
})

instance.interceptors.request.use(
  (config) => {
    // 开启loading加载
    loading.open()
    const token = store.getters.token
    if (token) config.headers.authorization = token

    return config
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  }
)
// 响应拦截
instance.interceptors.response.use(
  (res) => {
    // 关闭loading加载
    loading.close()
    console.log(res) // 后端响应的数据
    // TODO 全局相应处理
    if (res.data.code === 200) {
      return res
    } else {
      _showError(res.data.msg)
      return Promise.reject(new Error(res.data.msg))
    }
    // return res
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    console.log(error)
    // TODO token过期状态  401 描述信息  无感知登录 无感知刷新
    // 响应失败进行信息处理
    _showError(error.message)
    return Promise.reject(error)
  }
)
// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}

function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return instance(options)
}

export default request
