<template>
          <Editor doc="/doc/101.html" @DocLoaded="onDocLoaded"></Editor>
          <el-button @click="execCommand('readonly')">只读模式</el-button>
          <el-button @click="execCommand('form')">表单模式</el-button>
          <el-button @click="execCommand('design')">设计模式</el-button>
          <el-button @click="execCommand('print')">打印</el-button>
          <el-button @click="execCommand('previewpdf')">PDF</el-button>
          <el-button @click="execCommand('previewhtml')">HTML</el-button>
          <el-button @click="execCommand('exportjson')">导出</el-button>
</template>

<script setup>
import Editor from './Editor.vue';
import { ref } from 'vue'
var editor
//文档加载完成
const onDocLoaded = (e) => {
     editor =  e.editor
}

const execCommand = (cmd) => {
     editor.execCommand(cmd)
}
const current = ref("1")

</script>