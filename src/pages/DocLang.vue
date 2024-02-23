<template>
     <Source src="/code/DocLang.vue"></Source>
     <el-tabs v-model="activeName">
          <el-tab-pane label="英文" name="en-us">
            <Editor mode="design" @BeforeInit="init1" doc="/mock/en_us.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="简体中文" name="zh-cn">
            <Editor mode="design" doc="https://www.x-emr.cn/doc/999.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="繁体中文" name="zh-tw">
            <Editor mode="design" @BeforeInit="init2" doc="/mock/zh-tw.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="藏文" name="zh-bo">
            <Editor mode="design" @BeforeInit="init3" doc="/mock/zh-bo.html"></Editor>
          </el-tab-pane>
          <el-tab-pane label="维文" name="zh-ug">
            <Editor mode="design" @BeforeInit="init4" doc="/mock/zh-ug.html"></Editor>
          </el-tab-pane>
     </el-tabs>
</template>
    
<script setup>
    import { ref } from 'vue'

    const activeName = ref('en-us')

    //初始化
    const init1 = function(e) {
        e.option.lang = 'en-us'
    }

    //初始化
    const init2 = function(e) {
        e.option.lang = 'zh-tw'
    }

    //初始化
    const init3 = function(e) {
        e.option.lang = 'zh-bo'
    }

    //初始化
    const init4 = function(e) {
        e.option.lang = 'zh-ug'
    }


</script>