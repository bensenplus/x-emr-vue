<template>
    <el-container>
      <el-header height="30px">
        
      </el-header>
      <el-container>
        <el-aside width="150px">
          <Menu></Menu>
        </el-aside>
        <el-main style="padding: 10px;">
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>
<style>
html, body, #app{
  margin: 0; 
  padding: 0;
  width: 100%;
}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
    background-color: rgba(100, 100, 100, 0.5);
}
</style>
<script setup>
  import Menu from './components/Menu.vue';
</script>
