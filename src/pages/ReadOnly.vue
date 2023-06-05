<template>
    <Editor @BeforeInit="onBeforeInit"  @AfterInit="onAfterInit" style="margin: 10px 0;" height="1000px"></Editor>
    <Source src="/code/AppendDoc.vue"></Source>
</template>
    
<script setup>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'
    //初始化前
    const onBeforeInit = function(e) {
        e.option.mode = 'readonly'
    }
    //初始化后
    const onAfterInit = function(e) {
        e.editor.loadUrl('/doc/157.html')
    }
</script>