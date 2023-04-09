<template>
    <lay-menu :selected-key="selectedKey" 
    @change-selected-Key="changeSelectedKey" 
    @change-open-keys="changeOpenKeys" 
    v-model:openKeys="openKeys"
    :tree="true"
    theme="light"
    >
      <lay-menu-item id="home">首页</lay-menu-item>
      <lay-menu-item id="cmd">命令</lay-menu-item>
      <lay-menu-item id="data">数据</lay-menu-item>

    </lay-menu>
  </template>
  
  <script>
  import { ref } from 'vue'
  import router from '../router'
  
  export default {
    setup() {
  
      const selectedKey = ref("home")
      const openKeys = ref(["home"])
      const changeSelectedKey = (val) => {
        selectedKey.value = val;
        router.push(val)
      }
      const changeOpenKeys = (val) => {
        openKeys.value = val;
      }
      return {
        selectedKey,
        openKeys,
        changeSelectedKey,
        changeOpenKeys
      }
    }
  }
  </script>