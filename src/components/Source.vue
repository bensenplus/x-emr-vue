<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="源码" name="1">
      <div id="container" style="width: 100%; height: 100%; background-color:white; color: black;"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import {EditorView, basicSetup} from "codemirror"
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
    let container = document.getElementById('container')
    if(this.src){
      axios.get(this.src).then((result) => {
          new EditorView({
            extensions: [basicSetup, javascript()],
            doc: result.data,
            parent: container
          })
      })
    }
  }
}
</script>