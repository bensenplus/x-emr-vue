
<template>
        <Source src="/code/DataTable.vue"></Source>
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
    <Editor @AfterInit="onAfterInit" doc="/mock/data_table.html" mode="design" style="margin: 10px 0;"></Editor>


</template>
    
<script>

    import axios from 'axios'

    export default{
        data(){
            return{
                editor:null,
                 //服务端地址
                dataUrl:'https://www.x-emr.cn/doc/list.json'
            }
        },
        methods:{
            //初始化前
            onAfterInit: function(e) {
                this.editor = e.editor
            },
            //获取数据到表格
            bindDataForTable: function() {
                axios.get(this.dataUrl).then(res=>{
                    this.editor.bindDataList('list', res.data)
                    
                let html = `<field tabindex="0" id="" type="DropdownList" contenteditable="false" class="blank input" title="请选择" data-list="[{&quot;value&quot;:&quot;0&quot;,&quot;text&quot;:&quot;选项1&quot;},{&quot;value&quot;:&quot;1&quot;,&quot;text&quot;:&quot;选项2&quot;}]" name="" data-code="" data-expression="" event="undefined" multi="false" validate="false" data-show-vaule="" data-show-id="">请选择</field>`
                this.editor.$('#list tr:not(:first) td:nth-child(3)').html(html)

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