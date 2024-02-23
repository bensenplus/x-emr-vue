<template>

<el-row>
    <el-button-group>
        <el-button plain type="primary" @click="appendHtml()">添加病程</el-button>
    </el-button-group>
</el-row>

<Source src="/code/AppendDoc.vue"></Source>
<Editor doc="https://www.x-emr.cn/doc/233.html"  @DocLoaded="onDocLoaded" style="margin: 10px 0;"></Editor>

</template>


<script setup>
import axios from 'axios'//引入axios

let editor = null
//文档加载完成
const onDocLoaded = function(e) {
     editor =  e.editor
}

//添加日常病程
const appendHtml = function() {
    axios.get('https://www.x-emr.cn/doc/233.html').then((result) => {
        editor.appendHtml(result.data)
    })
}

</script>