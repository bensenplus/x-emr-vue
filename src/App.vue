<template>
    <el-container>
      <el-header height="30px">
        <el-switch v-model="dark" @change="changeMode()" active-text="暗黑" inactive-text="明亮" inline-prompt size="large" style="position: absolute; right:10px;"/>
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
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
} 

::-webkit-scrollbar-track {
    background-color: #000;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
    background-color: rgba(100, 100, 100, 1);
}
</style>
<script setup>
  import Menu from './components/Menu.vue';
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
