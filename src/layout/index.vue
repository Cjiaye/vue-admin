<template>
  <div id="main-container">
    <div class="left">
      <MenuBar></MenuBar>
    </div>
    <div class="right">
      <div class="right_top">
        <NavBar class="navbar"></NavBar>
      </div>
      <div class="right_bottom">
        <TagsView class="tagsView"></TagsView>
        <AppMain></AppMain>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuBar from '@/layout/components/MenuBar'
import NavBar from '@/layout/components/NavBar'
import AppMain from '@/layout/components/AppMain'
import TagsView from '@/layout/components/TagsView'
</script>
<style lang="scss" scoped>
#main-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    width: 210px;
  }

  .right {
    flex: 1;

    .right_top {
      height: 75px;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .navbar {
        flex: 1;
        border-bottom: 1px solid #ddd;
      }

      .tagsView {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
      }
    }

    .right_bottom {
      padding: 10px;
    }
  }
}
</style>
