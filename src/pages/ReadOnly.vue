<template>
    <el-row>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('print')">打印</el-button>
               <el-button plain type="primary" @click="execCommand('previewPdf')">预览PDF</el-button>
               <el-button plain type="primary" @click="execCommand('fullscreen')">全屏阅读</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 20px;">
               <el-button plain type="primary" @click="execCommand('exportJson')">导出JSON</el-button>
               <el-button plain type="primary" @click="execCommand('exportXml')">导出XML</el-button>
          </el-button-group>
     </el-row>
     <Editor @BeforeInit="onBeforeInit"  @AfterInit="onAfterInit" style="margin: 10px 0;"></Editor>
     <Source src="/code/ReadOnly.vue"></Source>

</template>
    
<script setup>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'

    var editor
    //初始化前
    const onBeforeInit = function(e) {
        editor = e.editor
        e.option.mode = 'readonly'
    }
    //初始化后
    const onAfterInit = function(e) {
        e.editor.loadUrl('/doc/999.html')
    }
    //文档命令
    const execCommand = (cmd) => {
        editor.execCommand(cmd)
    }
</script>