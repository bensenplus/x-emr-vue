<template>
  <el-collapse v-model="activeName" accordion @change="handleChange" style="width: 100%;">
    <el-collapse-item title="查看源码" name="1">
      <div ref="container" style="width: 100%; height: 100%;" tabindex="0"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import {EditorView, basicSetup} from "codemirror"
import { oneDark } from "@codemirror/theme-one-dark"
import {javascript} from "@codemirror/lang-javascript"
import axios from 'axios'//引入axios
import { ref } from 'vue'

var activeName

export default {
  props: ['src', 'open'],
  setup() {
    activeName = ref('0')
    return {activeName}
  },
  mounted() {
    if(this.open){
      this.activeName = '1'
    }
    if(this.src){
      axios.get(this.src).then((result) => {
          new EditorView({
            parent: this.$refs.container,
            extensions: [basicSetup, javascript(), oneDark],
            doc: result.data,
            readonly: ''
          })
      })
    }
  },
  methods:{
    handleChange(val){
       if(val == '1'){
        this.$refs.container.focus()
       }  
    }
  }
}
</script>