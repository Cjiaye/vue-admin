import UserApi from '../api/user'
import { setItem, getItem } from '../utils/storage'
export default {
  state: () => ({
    token: getItem('token') || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        commit('setToken', response.token)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async getUserInfo({ commit }) {
      try {
        const response = await UserApi.getUserInfo()
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    }
  }
}
