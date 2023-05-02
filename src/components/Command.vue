<template>
          <el-container>
               <el-header style="height: 25px;">
                    <el-button plain type="primary" @click="execCommand('readonly')">只读模式</el-button>
                    <el-button plain type="primary" @click="execCommand('form')">表单模式</el-button>
                    <el-button plain type="primary" @click="execCommand('design')">设计模式</el-button>
                    <el-button plain type="primary" @click="execCommand('print')">打印</el-button>
                    <el-button plain type="primary" @click="execCommand('previewpdf')">PDF</el-button>
                    <el-button plain type="primary" @click="execCommand('previewhtml')">HTML</el-button>
                    <el-button plain type="primary" @click="execCommand('exportjson')">导出JSON</el-button>
                    <el-button plain type="primary" @click="execCommand('exportxml')">导出XML</el-button>
               </el-header>
               <el-main>
                    <Editor doc="/doc/101.html" @DocLoaded="onDocLoaded"></Editor>
               </el-main>
          </el-container>
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