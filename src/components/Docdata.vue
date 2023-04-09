<template>
     <lay-container>
     <lay-tab v-model="currentTab">
          <lay-tab-item title="编辑器" id="1">
               <Editor id='doc1' height="400px" doc="/doc/102.html" @DocLoaded="onDocLoaded"></Editor>

               <lay-row space="10">
                    <lay-col md="6" sm="12" xs="24">
                         <lay-form  :model="patient" :pane="true" @change="bindData()">
                              <lay-form-item label="姓名">
                                   <lay-input v-model="patient.name" ></lay-input>
                              </lay-form-item>
                              <lay-form-item label="性别">
                                   <lay-input v-model="patient.sex"></lay-input>
                              </lay-form-item>
                              <lay-form-item label="年龄">
                                   <lay-input v-model="patient.age"></lay-input><lay-input v-model="patient.unit"></lay-input>
                              </lay-form-item>
                              <lay-form-item label="检查号">
                                   <lay-input v-model="patient.checkNo"></lay-input>
                              </lay-form-item>
                         </lay-form>
                    </lay-col>
                    <lay-col md="6" sm="12" xs="24">
                    </lay-col>
                    <lay-col md="12" sm="12" xs="24">
                         <lay-textarea rows="12" v-model="json"></lay-textarea>
                    </lay-col>
               </lay-row>
          </lay-tab-item>
          <lay-tab-item title="代码" id="2">
               
          </lay-tab-item>
     </lay-tab>
     </lay-container>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref("1")
const patient = ref({
     name:'周杰伦',
     sex: '男',
     age: '26',
     unit: '岁',
     checkNo: '202304'
})

const json = ref('')
var editor;

//文档加载完成
const onDocLoaded = (e) => {
     editor =  e.editor
     bindData()
}

const bindData = () => {
     editor.setFieldTextById('name', patient.value.name)
     editor.setFieldTextById('sex', patient.value.sex)
     editor.setFieldTextById('age', patient.value.age)
     editor.setFieldTextById('unit', patient.value.unit)
     editor.setFieldTextById('check_no', patient.value.checkNo)
     json.value = JSON.stringify(editor.getJsonData(),null, 8)
}

</script>