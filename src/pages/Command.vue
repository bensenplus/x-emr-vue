<template>
     <Source src="/code/Command.vue"></Source>
     <el-row>
          <el-button-group>
               <el-button plain type="primary" @click="execCommand('form')">表单模式</el-button>
               <el-button plain type="primary" @click="execCommand('design')">设计模式</el-button>
               <el-button plain type="primary" @click="execCommand('readonly')">只读模式</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('print')">打印</el-button>
               <el-button plain type="primary" @click="execCommand('preview')">打印预览</el-button>
               <el-button plain type="primary" @click="execCommand('previewPdf')">预览PDF</el-button>
               <el-button plain type="primary" @click="execCommand('previewHtml')">预览HTML</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('exportHtml')">导出模板</el-button>
               <el-button plain type="primary" @click="execCommand('exportJson')">导出数据</el-button>
               <el-button plain type="primary" @click="execCommand('exportPdf')">导出PDF</el-button>
               <el-button plain type="primary" @click="execCommand('exportWord')">导出Word</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('mobile')">移动填报</el-button>
          </el-button-group>
     </el-row>
     <el-row>
          <Editor doc="https://www.x-emr.cn/doc/999.html" @afterInit="onAfterInit" style="margin: 10px 0;" mode="design"></Editor>
     </el-row>
</template>

<script setup>
import { ref } from 'vue'

var editor

//初始化事件
const onAfterInit = (e) => {
     editor =  e.editor
}

//文档命令I
const execCommand = (cmd) => {
     let param = {fileName:'病案首页'}
     editor.execCommand(cmd, param)
}
const current = ref("1")

</script>