<template>
      <Source src="/code/DocMode.vue"></Source>
      <el-tabs v-model="activeName">
          <el-tab-pane label="设计模式" name="design">
                <Editor mode="design" doc="https://www.x-emr.cn/doc/999.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="表单模式" name="form">
                <Editor mode="form" doc="https://www.x-emr.cn/doc/999.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="阅读模式" name="readonly">
                <Editor mode="readonly" doc="https://www.x-emr.cn/doc/999.html"></Editor>
          </el-tab-pane>
     </el-tabs>
</template>
    
<script setup>
    import { ref } from 'vue'
    const activeName = ref('design')

</script>