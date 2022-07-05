const getters = {
  token: (state) => state.user.token,
  captchaImg: (state) => state.user.captchaImg,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  tagsView: (state) => state.tagsview.tags
}
export default getters
