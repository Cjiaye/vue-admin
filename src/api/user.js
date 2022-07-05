import request from '../utils/request'
const login = (data) => {
  return request({ url: 'login', method: 'POST', data })
}
const getUserInfo = () => {
  return request({ url: 'sys/userInfo', method: 'GET' })
}

const getcode = () => {
  return request({ url: 'captcha', method: 'GET' })
}

export default {
  login,
  getUserInfo,
  getcode
}
