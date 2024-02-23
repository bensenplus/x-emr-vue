<template>
     <Source src="/code/Calculate.vue"></Source>
     <el-row>
          <Editor doc="/mock/assess_table.html" @afterInit="onAfterInit" style="margin: 10px 0;" mode="design"></Editor>
     </el-row>
</template>

<script setup>
import { ref } from 'vue'

var editor

//初始化事件
const onAfterInit = (e) => {
     editor =  e.editor
}

</script>