
<template>
    <el-row>
        <el-col :span="2" style="vertical-align: center;">服务器地址：</el-col>
        <el-col :span="10"><el-input v-model="dataUrl" ></el-input></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="2"><el-button plain type="primary" @click="bindDataForTable">获取表格数据</el-button></el-col>
    </el-row>
     <Editor @BeforeInit="onBeforeInit" doc="/doc/data_table.html" mode="design" style="margin: 10px 0;"></Editor>
     <Source src="/code/SaveDoc.vue"></Source>

</template>
    
<script>
    import Editor from '@/components/Editor.vue'
    import Source from '@/components/Source.vue'
    import axios from 'axios'

    export default{
        components: {Editor,Source},
        data(){
            return{
                editor:null,
                 //服务端地址
                dataUrl:'https://www.x-emr.cn/doc/list.json'
            }
        },
        methods:{
            //初始化前
            onBeforeInit: function(e) {
                this.editor = e.editor
            },
            //仅保存HTML文档
            bindDataForTable: function() {
                axios.get(this.dataUrl).then(res=>{
                    this.editor.bindDataList('list', res.data)
                })
            },
        }

}
</script>