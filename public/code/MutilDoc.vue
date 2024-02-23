<template>
    <el-row>
     <Source src="/code/MutilDoc.vue"></Source>
    </el-row>
    <el-row :gutter="10">
        <el-col :span="12">
            <Editor doc="https://www.x-emr.cn/doc/157.html" @AfterInit="onAfterInit1"  mode="form"></Editor>
        </el-col>
        <el-col :span="12">
            <Editor doc="https://www.x-emr.cn/doc/999.html"  @AfterInit="onAfterInit2" mode="readonly"></Editor>
        </el-col>
    </el-row>

</template>


<script setup>

    //初始化前
    const onAfterInit1 = function(e) {
        e.option.scale = 0.8
        e.option.toolbar.hide = true
        e.option.statusbar.hide = true
    }

    //初始化前
    const onAfterInit2 = function(e) {
        e.option.mode = 'form'
        e.option.scale = 0.8
    }

</script>