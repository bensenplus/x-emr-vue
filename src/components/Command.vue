<template>
      <el-tabs v-model="activeName">
          <el-tab-pane label="文档命令" name="1">
               <el-header style="height: 25px;">
                    <el-button-group>
                         <el-button plain type="primary" @click="execCommand('readonly')">只读模式</el-button>
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
               </el-header>
               <el-main>
                    <Editor doc="/doc/999.html" @DocLoaded="onDocLoaded"></Editor>
               </el-main>

          </el-tab-pane>
          <el-tab-pane label="代码" name="2">
               <CodeView file="/code/Command.vue"></CodeView>
          </el-tab-pane>
     </el-tabs>
</template>

<script setup>
import Editor from './Editor.vue';
import CodeView from './CodeView.vue';
import { ref } from 'vue'

const activeName = ref('1')

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