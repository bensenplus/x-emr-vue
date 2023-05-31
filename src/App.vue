<template>
    <el-container>
      <el-header class="menu-header">
        <img src="./assets/xemr.svg"/>
        <span style="flex-grow: 1;"></span>
        <el-switch v-model="dark" @change="changeMode()" :active-icon="Moon" :inactive-icon="Sunny" inline-prompt/>
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
  .menu-header{
    display:flex;
    align-items:center;
    height:45px; 
    border-bottom: 1px solid var(--el-menu-border-color); 
  }

</style>

<script setup>
  import Menu from './components/Menu.vue';
  import { Sunny, Moon} from '@element-plus/icons-vue'
  import { ref } from 'vue'

  const dark = ref(true)

  const changeMode = () => {
      if(dark.value){
        document.documentElement.setAttribute('class','dark')
      }else{
        document.documentElement.setAttribute('class','light')
      }
  }

</script>
