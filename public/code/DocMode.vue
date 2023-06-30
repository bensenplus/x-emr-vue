<template>
     <Source src="/code/DocMode.vue"></Source>
     <el-row :gutter="20">
        <el-col :span="20">
            <h3>1.设计模式</h3>
            <Editor mode="design" doc="https://www.x-emr.cn/doc/999.html"></Editor>
        </el-col>
     </el-row>
     <el-row :gutter="20">
        <el-col :span="20">
            <h3>2.表单模式</h3>
            <Editor mode="form" doc="https://www.x-emr.cn/doc/999.html"></Editor>
        </el-col>
    </el-row>
     <el-row :gutter="20">
        <el-col :span="20">
            <h3>3.阅读模式</h3>
            <Editor mode="readonly" doc="https://www.x-emr.cn/doc/999.html"></Editor>
        </el-col>
    </el-row>
</template>
    
<script setup>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'
</script>