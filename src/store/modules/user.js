import UseApi from '../../api/user'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    captchaImg: '',
    userInfo: {}
  },
  mutations: {
    setCaptcha(state, res) {
      const { captchaImg } = res.data.data
      state.captchaImg = captchaImg
    },
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async getCapt({ commit }) {
      try {
        const res = await UseApi.getcCaptcha()
        commit('setCaptcha', res)
        return res
      } catch (error) {}
    },
    async login({ commit }, payload) {
      const res = await UseApi.login(payload)
      commit('setToken', res.headers.authorization)
      return res
    },
    async getUserInfo({ commit }) {
      const res = await UseApi.getUserInfo()
      console.log(res)
      commit('setUserInfo', res.data.data)
    }
  }
}
