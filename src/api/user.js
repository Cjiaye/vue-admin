import request from '../utils/request'
const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

const getcCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}

export default {
  login,
  getUserInfo,
  getcCaptcha
}
