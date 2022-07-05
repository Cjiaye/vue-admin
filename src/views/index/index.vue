<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
            router
          >
            <el-menu-item>
              <el-icon><setting /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu>
              <template #title>
                <el-icon><location /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/sys-users">用户管理</el-menu-item>
              <el-menu-item index="/sys-roles">角色管理</el-menu-item>
              <el-menu-item index="/sys-menus">菜单管理</el-menu-item>
            </el-sub-menu>
            <el-sub-menu>
              <template #title>
                <el-icon><location /></el-icon>
                <span>系统工具</span>
              </template>
              <el-menu-item index="/sys-dicts">数字字典</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="background: #17b3a3">
            <h3>vueadmin后台管理系统</h3>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 500vh;
}
</style>
