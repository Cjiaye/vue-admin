<template>
  <template v-if="!props.tree.children || props.tree.children.length <= 0">
    <el-menu-item :index="tree.path">
      <span>{{ props.tree.meta.title }}</span>
    </el-menu-item>
  </template>

  <template v-else>
    <el-sub-menu :index="tree.path">
      <template #title>{{ props.tree.meta.title }}</template>
      <menu-item
        v-for="(item, index) in props.tree.children"
        :key="index"
        :tree="item"
      ></menu-item>
    </el-sub-menu>
  </template>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  tree: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="scss" scoped></style>
