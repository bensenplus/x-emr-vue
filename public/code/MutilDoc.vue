<template>
    <el-row :gutter="10">
        <el-col :span="12">
            <Editor doc="/doc/157.html" @BeforeInit="onBeforeInit1"  mode="form"></Editor>
        </el-col>
        <el-col :span="12">
            <Editor doc="/doc/999.html"  @BeforeInit="onBeforeInit2" mode="readonly"></Editor>
        </el-col>
    </el-row>
    <el-row>
     <Source src="/code/MutilDoc.vue"></Source>
    </el-row>
</template>


<script setup>
import Editor from '@/components/Editor.vue';
import Source from '@/components/Source.vue';
import { ref } from 'vue'

    //初始化前
    const onBeforeInit1 = function(e) {
        e.option.scale = 0.8
        e.option.toolbar.hide = true
        e.option.statusbar.hide = true
    }

    //初始化前
    const onBeforeInit2 = function(e) {
        e.option.mode = 'form'
        e.option.scale = 0.8
    }

</script>