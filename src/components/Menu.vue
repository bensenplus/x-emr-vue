<template>

<el-menu default-active="Home"  @select="handleSelect" >
        <el-menu-item index="Home">
          <el-icon><home-filled /></el-icon>
          <span>集成方法</span>
        </el-menu-item>
        <el-menu-item index="DocMode">
          <el-icon><icon-menu /></el-icon>
          <span>文档模式</span>
        </el-menu-item>
        <el-menu-item index="Command">
          <el-icon><icon-menu /></el-icon>
          <span>文档命令</span>
        </el-menu-item>
        <el-menu-item index="BindData">
          <el-icon><document /></el-icon>
          <span>数据绑定</span>
        </el-menu-item>
        <el-menu-item index="DataTable">
          <el-icon><document /></el-icon>
          <span>数据表格</span>
        </el-menu-item>
        <el-menu-item index="SaveDoc">
          <el-icon><document /></el-icon>
          <span>保存文档</span>
        </el-menu-item>
        <el-menu-item index="AppendDoc">
          <el-icon><document /></el-icon>
          <span>合并文档</span>
        </el-menu-item>
        <el-menu-item index="VitalSigns">
          <el-icon><document /></el-icon>
          <span>体温单</span>
        </el-menu-item>
        <el-menu-item index="Signature">
          <el-icon><document /></el-icon>
          <span>电子签名</span>
        </el-menu-item>
        <el-menu-item index="Calculate">
          <el-icon><document /></el-icon>
          <span>计算式</span>
        </el-menu-item>
        <el-menu-item index="EChart">
          <el-icon><document /></el-icon>
          <span>图表</span>
        </el-menu-item>
        <el-menu-item index="DocLang">
          <el-icon><document /></el-icon>
          <span>多语言</span>
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