<template>
     <lay-container>
     <lay-tab v-model="current">
          <lay-tab-item title="编辑器" id="1">
               <Editor doc="/doc/101.html" @DocLoaded="onDocLoaded"></Editor>
               <lay-button @click="execCommand('readonly')">只读模式</lay-button>
               <lay-button @click="execCommand('form')">表单模式</lay-button>
               <lay-button @click="execCommand('design')">设计模式</lay-button>
               <lay-button @click="execCommand('print')">打印</lay-button>
               <lay-button @click="execCommand('previewpdf')">PDF</lay-button>
               <lay-button @click="execCommand('previewhtml')">HTML</lay-button>
               <lay-button @click="execCommand('exportjson')">导出</lay-button>
          </lay-tab-item>
          <lay-tab-item title="代码" id="2">
               
          </lay-tab-item>
     </lay-tab>
     </lay-container>
</template>

<script setup>
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