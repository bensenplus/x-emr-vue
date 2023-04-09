<template>
     <lay-container>
     <lay-tab v-model="currentTab">
          <lay-tab-item title="编辑器" id="1">
               <Editor id='doc1' height="400px" doc="/doc/102.html" @DocLoaded="onDocLoaded"></Editor>
               <lay-row space="10">
                    <lay-col md="3" sm="12" xs="24">
                         <lay-input :allow-clear="true" v-model="patientName" placeholder="患者姓名" @change="getData()"></lay-input>
                    </lay-col>
                    <lay-col md="3" sm="12" xs="24">
                         <lay-input :allow-clear="true" v-model="sex" placeholder="患者性别" @change="getData()"></lay-input>
                    </lay-col>
                    <lay-col md="6" sm="12" xs="24"></lay-col>
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
const patientName = ref('周杰伦')
const sex = ref('男')
const json = ref('')
var editor;

//文档加载完成
const onDocLoaded = (e) => {
     editor =  e.editor
     getData()
}

const getData = () => {
     editor.setFieldTextById('patientName', patientName.value)
     editor.setFieldTextById('sex', sex.value)
     json.value = JSON.stringify(editor.getJsonData(),null, 4)
}

</script>