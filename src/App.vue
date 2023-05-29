<script setup>
  import Menu from './components/Menu.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="160px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<style>
html, body,  #app{
  margin: 0; padding: 0;
  width: 100%;
  height: 100%;
  color: white;
}
</style>