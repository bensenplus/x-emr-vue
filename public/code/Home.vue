<template>
      <el-tabs v-model="activeName">
          <el-tab-pane label="病案首页" name="999">
               <Editor id="999" doc="/doc/999.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="入院记录" name="157">
               <Editor id="157" doc="/doc/157.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="超声检查" name="302">
               <Editor id="302" doc="/doc/302.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="代码" name="code">
               <CodeView file="/doc/157.html"></CodeView>
          </el-tab-pane>
     </el-tabs>
</template>

<script setup>

  import Editor from './Editor.vue';
  import CodeView from './CodeView.vue';
  import { ref } from 'vue'

  const activeName = ref('999')

</script>