<template>
     <el-switch v-model="drawer" size="large" active-text="显示绑定数据"/>
     <Source src="/code/BindData.vue"></Source>
     <Editor id='302' doc="/mock/bind_data.html" @DocLoaded="onDocLoaded" style="margin: 10px 0;"></Editor>
     <el-drawer v-model="drawer" title="数据">
          <el-form  @change="bindData()">
               <el-form-item label="姓名">
                    <el-col :span="12"><el-input v-model="patient.name" ></el-input></el-col>
               </el-form-item>
               <el-form-item label="性别">
                    <el-col :span="6"><el-input v-model="patient.sex"></el-input></el-col>
               </el-form-item>
               <el-form-item label="年龄">
                    <el-col :span="6"><el-input v-model="patient.age"></el-input></el-col>
                    <el-col :span="6"><el-input v-model="patient.unit"></el-input></el-col>
               </el-form-item>
               <el-form-item label="检查号">
                    <el-col :span="12"><el-input v-model="patient.checkNo"></el-input></el-col>
               </el-form-item>
               <el-form-item label="JSON">
                    <el-input type="textarea" :rows="25" v-model="json" style="font-size: xx-small;"></el-input>
               </el-form-item>
          </el-form>
     </el-drawer>
</template>

<script setup>
import { ref } from 'vue'

const patient = ref({
     name:'周杰伦',
     sex: '男',
     age: '26',
     unit: '岁',
     checkNo: '202304'
})

const json = ref('')
const drawer = ref(false)

//文档加载完成
var editor

const onDocLoaded = (e) => {
     editor =  e.editor
     bindData()
}

const bindData = () => {
     
     editor.setBindObject(patient.value)

     json.value = JSON.stringify(editor.getBindObject(), null, 8)
}

</script>