<template>
    <el-container>
      <el-header class="menu-header">
        <Fold color="#22A187" style="width: 2em; margin-right: 1em; cursor: pointer;" @click="toggleClick()"/>
        <img style="width: 1em;" src="./assets/xemr.svg"/>
        <span style="flex-grow: 1;"></span>
        <el-switch v-model="dark" @change="changeStyle()" :active-icon="Moon" :inactive-icon="Sunny" inline-prompt/>
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
  import Menu from './components/Menu.vue';
  import { Sunny, Moon, Fold} from '@element-plus/icons-vue'
  import { ref } from 'vue'

  const dark = ref(true)
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
