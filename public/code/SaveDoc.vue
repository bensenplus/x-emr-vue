
<template>
    <el-row>
        <el-col :span="2" style="vertical-align: center;">服务器地址：</el-col>
        <el-col :span="10"><el-input v-model="serverUrl" ></el-input></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="2"><el-button plain type="primary" @click="saveHtml">保存文档</el-button></el-col>
        <el-col :span="2"> <el-button plain type="primary" @click="saveHtmlAndData">保存数据&文档</el-button></el-col>
    </el-row>
     <Editor @BeforeInit="onBeforeInit" doc="https://www.x-emr.cn/doc/999.html" style="margin: 10px 0;"></Editor>
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
                serverUrl:'http://localhost/post'
            }
        },
        methods:{
            //初始化前
            onBeforeInit: function(e) {
                this.editor = e.editor
            },
            //仅保存HTML文档
            saveHtml: function() {
                let data = {'doc': this.editor.getHtml()}
                axios.post(this.serverUrl, data).then(res=>{
                    console.log('res=>',res)
                })
            },
            //保存文档及机构化数据
            saveHtmlAndData: function() {
                let data = {
                    'doc': this.editor.getHtml(),
                    'data': this.editor.getBindObject()
                }
                axios.post(this.serverUrl, data).then(res=>{
                    console.log('res=>',res)
                })
            },
        }

}
</script>