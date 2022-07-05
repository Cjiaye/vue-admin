<template>
  <div class="navBox">
    <div class="left"><b>VueAdmin后台管理系统</b></div>
    <div class="right">
      <img class="portrait" :src="$store.getters.userInfo.avatar" />
      <span class="dropdown">
        <el-dropdown>
          {{ $store.getters.userInfo.username }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click="handlelogout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const handlelogout = () => {
  localStorage.removeItem('router')
  localStorage.removeItem('authorization')
  localStorage.removeItem('token')
  route.push('/login')
}
</script>
<style lang="scss" scoped>
.navBox {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #17b3a3;
}
.right {
  .portrait {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .dropdown {
    margin: 0 10px;
  }
}
</style>
