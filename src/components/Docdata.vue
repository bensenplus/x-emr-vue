<template>
<el-tabs v-model="activeName">
     <el-tab-pane label="数据绑定" name="1">
          <el-container>
               <Editor id='302' doc="/doc/302.html" @DocLoaded="onDocLoaded"></Editor>
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
          </el-container>
     </el-tab-pane>
     <el-tab-pane label="代码" name="2">
          <CodeView file="/code/Docdata.vue"></CodeView>
     </el-tab-pane>
</el-tabs>
</template>

<script setup>
import Editor from './Editor.vue';
import CodeView from './CodeView.vue';
import { ref } from 'vue'

const patient = ref({
     name:'周杰伦',
     sex: '男',
     age: '26',
     unit: '岁',
     checkNo: '202304'
})

const json = ref('')
const activeName = ref("1")
const drawer = ref(true)

//文档加载完成
var editor

const onDocLoaded = (e) => {
     editor =  e.editor
     bindData()
}

const bindData = () => {
     editor.setBindObject(patient.value.name,'name')
     editor.setBindObject(patient.value.sex, 'sex')
     editor.setBindObject(patient.value.age, 'age')
     editor.setBindObject(patient.value.unit, 'unit')
     editor.setBindObject(patient.value.checkNo,'check_no')
     json.value = JSON.stringify(editor.getBindObject(), null, 8)
}

</script>