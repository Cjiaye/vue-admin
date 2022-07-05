import request from './request'

export const getNav = () => {
  return request.get('/sys/menu/nav')
}
