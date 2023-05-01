<script setup>
  import Menu from './components/Menu.vue';
</script>

<template>
  <lay-config-provider :theme="theme">
    <lay-layout class="layout">
      <lay-side>
        <Menu></Menu>
      </lay-side>
      <lay-body>
        <lay-fullscreen>
          <router-view></router-view>
        </lay-fullscreen>
      </lay-body>
    </lay-layout>
  </lay-config-provider>
</template>

<script>
  import { ref } from 'vue';
  const theme = ref('dark')
</script>

<style>
html, body,  #app, .layout{
  width: 100%;
  height: 100%;
  color: white;
}
.layui-container{
  height: 100%;
}
</style>