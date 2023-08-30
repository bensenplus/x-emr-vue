<template>
     <Source src="/code/DocLang.vue"></Source>
     <el-row :gutter="20">
        <el-col :span="20">
            <h3>1.简体中文</h3>
            <Editor mode="design" doc="https://www.x-emr.cn/doc/999.html"></Editor>
        </el-col>
     </el-row>
     <el-row :gutter="20">
        <el-col :span="20">
            <h3>2.英文</h3>
            <Editor mode="design" @BeforeInit="init1" doc="https://www.x-emr.cn/doc/1691116501534.html"></Editor>
        </el-col>
    </el-row>
     <el-row :gutter="20">
        <el-col :span="20">
            <h3>3.繁体中文</h3>
            <Editor mode="design" @BeforeInit="init2" doc="https://www.x-emr.cn/doc/999.html"></Editor>
        </el-col>
    </el-row>
</template>
    
<script setup>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'

    //初始化
    const init1 = function(e) {
        e.option.lang = 'en-us'
    }

    //初始化
    const init2 = function(e) {
        e.option.lang = 'zh-tw'
    }


</script>