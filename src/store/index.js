import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import tagsview from './modules/tagsview'
export default createStore({
  getters,
  modules: {
    user,
    tagsview
  }
})
