<template>
      <el-tabs v-model="activeName">
          <el-tab-pane label="病案首页" name="doc1">
               <Editor id='doc1' doc="/doc/100.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="入院记录" name="doc2">
               <Editor id='doc2' doc="/doc/101.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="超声检查" name="doc3">
               <Editor id='doc3' doc="/doc/103.html"></Editor>
          </el-tab-pane>
     </el-tabs>
</template>

<script setup>
  import Editor from './Editor.vue';
  import { ref } from 'vue'
  const activeName = ref('doc1')
</script>