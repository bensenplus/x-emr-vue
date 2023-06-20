<template>
     <el-row>
          <el-button-group>
               <el-button plain type="primary" @click="execCommand('form')">表单模式</el-button>
               <el-button plain type="primary" @click="execCommand('design')">设计模式</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('print')">打印</el-button>
               <el-button plain type="primary" @click="execCommand('preview')">打印预览</el-button>
               <el-button plain type="primary" @click="execCommand('previewPdf')">预览PDF</el-button>
               <el-button plain type="primary" @click="execCommand('previewHtml')">预览HTML</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('exportJson')">导出JSON</el-button>
               <el-button plain type="primary" @click="execCommand('exportXml')">导出XML</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('mobile')">手机填报</el-button>
          </el-button-group>
     </el-row>
     <el-row>
          <Editor doc="https://www.x-emr.cn/doc/999.html" @DocLoaded="onDocLoaded" style="margin: 10px 0;" mode="design"></Editor>
     </el-row>

     <Source src="/code/Command.vue"></Source>

</template>

<script setup>
import Editor from '@/components/Editor.vue';
import Source from '@/components/Source.vue';
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