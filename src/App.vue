<template>
    <el-container>
      <el-header class="menu-header">
        <Fold style="width: 1.5em; margin-right: 1em; cursor: pointer; color:var(--el-color-primary);" @click="toggleClick()"/>
        <span style="flex-grow: 1;">X-EMR-VUE 示例</span>
        <el-switch v-model="dark" @change="changeStyle()" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt/>
      </el-header>
      <el-container>
        <el-aside class="menu-aside">
          <Menu></Menu>
        </el-aside>
        <el-main class="main-view">
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>

<style>
  .menu-header{
    position: fixed;
    top: 0;
    display:flex;
    align-items:center;
    height:45px; width: 100%;
    border-bottom: 1px solid var(--el-menu-border-color);
    z-index: 1;
    background-color: var(--bg-clolor);
  }

  .menu-aside{
    position: fixed;
    width: 150px;
    top: 45px;
    z-index: 1;
    background-color: var(--bg-clolor);
  }

  .main-view{
    padding: 10px; 
    margin:45px 0 0 150px;
  }

</style>

<script setup>
  import Menu from './Menu.vue';
  import { Sunny, Moon, Fold} from '@element-plus/icons-vue'
  import { ref } from 'vue'

  const dark = ref(false)
  const menu = ref(null)

  const changeStyle = () => {
      if(dark.value){
        document.documentElement.setAttribute('class','dark')
      }else{
        document.documentElement.setAttribute('class','light')
      }
  }

  const toggleClick = function(){
    let menu = document.querySelector('.menu-aside')
    let main = document.querySelector('.main-view')
    if(menu.style.display == 'none'){
      menu.style.display = 'block'
      main.style.marginLeft = '150px'
    }else{
      menu.style.display = 'none'
      main.style.marginLeft = '0'
    }

  }

</script>
