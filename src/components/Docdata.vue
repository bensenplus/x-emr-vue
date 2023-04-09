<template>
     <lay-container>
     <lay-tab v-model="current">
          <lay-tab-item title="编辑器" id="1">
               <Editor id='doc1' doc="/doc/101.html"></Editor>
               <lay-row space="10">
                    <lay-col md="4" sm="12" xs="24">
                         <lay-input :allow-clear="true" v-model="patientName" placeholder="请输入患者姓名"></lay-input>
                    </lay-col>
                    <lay-col md="4" sm="12" xs="24">
                         <lay-button @click="setPatientName()">设置</lay-button>
                    </lay-col>
               </lay-row>
               <lay-row space="10">
                    <lay-col md="4" sm="12" xs="24">
                         <lay-button @click="getJsonData()">getJsonData</lay-button>
                    </lay-col>
                    <lay-col md="20" sm="12" xs="24">
                         <lay-textarea rows="10" v-model="json"></lay-textarea>
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

const patientName = ref('周杰伦')
const json = ref('')

const setPatientName = () => {
     doc1.setFieldTextById('patientName', patientName.value)
}
const getJsonData = () => {
     json.value = JSON.stringify(doc1.getJsonData(),null, 4)
}

const current = ref("1")

</script>