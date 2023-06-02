<template>

<el-row>
    <el-button-group>
        <el-button plain type="primary" @click="appendHtml()">添加病程</el-button>
    </el-button-group>
</el-row>

<Editor doc="/doc/233.html"  @DocLoaded="onDocLoaded" style="margin: 10px 0;"></Editor>

<Source src="/code/AppendDoc.vue"></Source>

</template>


<script setup>
import Editor from '@/components/Editor.vue'
import Source from '@/components/Source.vue'
import axios from 'axios'//引入axios

let editor = null
//文档加载完成
const onDocLoaded = function(e) {
     editor =  e.editor
}

//添加日常病程
const appendHtml = function() {
    axios.get('/doc/233.html').then((result) => {
        editor.appendHtml(result.data)
    })
}

</script>