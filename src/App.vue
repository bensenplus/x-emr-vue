<template>
    <el-container>
      <el-header class="menu-header">
        <Fold color="#22A187" style="width: 2em; margin-right: 1em; cursor: pointer;" @click="toggleClick()"/>
        <img style="width: 1em;" src="./assets/xemr.svg"/>
        <span style="flex-grow: 1;"></span>
        <el-switch v-model="dark" @change="changeStyle()" :active-icon="Moon" :inactive-icon="Sunny" inline-prompt/>
      </el-header>
      <el-container>
        <el-aside width="150px" id="_menuAside">
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
    let display = document.getElementById('_menuAside').style.display
    if(display == 'none'){
      document.getElementById('_menuAside').style.display = 'block'
    }else{
      document.getElementById('_menuAside').style.display = 'none'
    }

  }

</script>
