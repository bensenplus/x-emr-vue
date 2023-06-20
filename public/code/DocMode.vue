<template>
     <h3>1.设计模式</h3>
     <Editor mode="design" doc="https://www.x-emr.cn/doc/999.html" style="margin: 10px 0;"></Editor>
     <h3>2.表单模式</h3>
     <Editor mode="form" doc="https://www.x-emr.cn/doc/999.html" style="margin: 10px 0;"></Editor>
     <h3>3.阅读模式</h3>
     <Editor mode="readonly" doc="https://www.x-emr.cn/doc/999.html" style="margin: 10px 0;"></Editor>
     <Source src="/code/DocMode.vue"></Source>

</template>
    
<script setup>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'
</script>