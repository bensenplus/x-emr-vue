<template>
    <el-row :gutter="10">
        <el-col :span="12">
            <Editor doc="/doc/157.html"></Editor>
        </el-col>
        <el-col :span="12">
            <Editor doc="/doc/999.html"></Editor>
        </el-col>
    </el-row>
    <el-row :span="12">
        <el-col>
            <Source src="/code/MutilDoc.vue"></Source>
        </el-col>
    </el-row>
</template>


<script setup>
import Editor from '@/components/Editor.vue';
import Source from '@/components/Source.vue';
import { ref } from 'vue'

</script>