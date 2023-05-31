<template>

<el-menu default-active="home"  @select="handleSelect" >
        <el-menu-item index="home">
          <el-icon><home-filled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="editor">
          <el-icon><document /></el-icon>
          <span>文档配置</span>
        </el-menu-item>
        <el-menu-item index="cmd">
          <el-icon><icon-menu /></el-icon>
          <span>文档命令</span>
        </el-menu-item>
        <el-menu-item index="data">
          <el-icon><document /></el-icon>
          <span>数据绑定</span>
        </el-menu-item>
      </el-menu>
  </template>
  
  <script setup>
  import router from '../router'
  import {Document, Menu as IconMenu, HomeFilled} from '@element-plus/icons-vue'
  
  const handleSelect = (key) => {
    router.push(key)
  }
  </script>