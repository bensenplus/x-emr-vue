<template>
      <el-tabs v-model="activeName">
          <el-tab-pane label="病案首页" name="100">
               <Editor id="100" doc="/doc/100.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="入院记录" name="101">
               <Editor id="101" doc="/doc/101.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="超声检查" name="102">
               <Editor id="102" doc="/doc/102.html"></Editor>
          </el-tab-pane>
     </el-tabs>
</template>

<script setup>
  import Editor from './Editor.vue';
  import { ref } from 'vue'
  const activeName = ref('100')
</script>