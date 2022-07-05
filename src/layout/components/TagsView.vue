<template>
  <div>
    <ul>
      <li
        v-for="(item, i) in tags"
        :key="i"
        :class="{ active: $route.path === item.path }"
        class="tags-view"
        @click="changeTags(item)"
      >
        {{ item.title }}
        <span @click.stop="handleDeleteTags(i, item.path)">X</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const route = useRoute()
watch(
  () => route.path,
  (nval) => {
    const obj = {
      path: route.path,
      title: route.meta.title
    }
    store.commit('tagsview/setTags', obj)
  },
  { immediate: true }
)
const tags = computed(() => {
  return store.getters.tagsView
})
const changeTags = (item) => {
  router.push(item.path)
}
const handleDeleteTags = (i, path) => {
  store.commit('tagsview/deleteTags', {
    i,
    path
  })
}
</script>

<style lang="scss" scoped>
.tags-view {
  list-style: none;
  float: left;
  height: 40px;
  padding: 0 20px;
  text-align: center;
  line-height: 41px;
  cursor: pointer;
  border-right: 1px solid #e4e7ed;
  font-size: 15px;
  transition: all 0.5s;

  span {
    display: none;
  }

  &:hover span {
    display: inline-block;
  }
}

.active {
  color: #409eff;
  border-bottom: 1px solid #fff;
}
</style>
