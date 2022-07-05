<template>
  <div>
    <el-menu
      :default-active="$route.path"
      active-text-color="#ffd04b"
      background-color="#545c64"
      router
      text-color="#fff"
      unique-opened
    >
      <MenuItem v-for="(item, index) in list" :key="index" :tree="item">
      </MenuItem>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getMenus, getParentMenu } from '@/utils/menus'
import MenuItem from '@/layout/components/menuItem'
import { reactive } from 'vue'

const router = useRouter()
const list = reactive(getMenus(getParentMenu(router.getRoutes())))
</script>
<style lang="scss" scoped>
.el-menu {
  height: 500vh;
}
</style>
