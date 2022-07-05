import { setItem, getItem } from '@/utils/storage'
import { TAGS } from '@/utils/constant'

export default {
  namespaced: true,
  state: () => ({
    tags: getItem(TAGS) || []
  }),
  mutations: {
    setTags(state, view) {
      if (!view.title) return
      const flag = state.tags.find((item) => item.path === view.path)
      if (!flag) {
        state.tags.push(view)
      }
      setItem(TAGS, state.tags)
    },
    deleteTags(state, person) {
      if (person.path === '/index') return
      state.tags.splice(person.i, 1)
    }
  }
}
