
<template>
    <el-row>
        <el-col :span="2" style="vertical-align: center;">服务器地址：</el-col>
        <el-col :span="8"><el-input v-model="dataUrl" ></el-input></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="1"><el-button plain type="primary" @click="bindDataForTable">填充数据</el-button></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="1"><el-button plain type="primary" @click="clearDataTable">清除数据</el-button></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="1"><el-button plain type="primary" @click="execCommand('preview')">打印预览</el-button></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="1"><el-button plain type="primary" @click="execCommand('print')">打印</el-button></el-col>
    </el-row>
     <Editor @BeforeInit="onBeforeInit" doc="/mock/data_table.html" mode="design" style="margin: 10px 0;"></Editor>
     <Source src="/code/DataTable.vue"></Source>

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
            //获取数据到表格
            bindDataForTable: function() {
                axios.get(this.dataUrl).then(res=>{
                    this.editor.bindDataList('list', res.data)
                })
            },
            //清除数据表格
            clearDataTable: function() {
                this.editor.bindDataList('list', [])
            },
            execCommand : function(cmd){
                    this.editor.execCommand(cmd)
                }
            }

}
</script>