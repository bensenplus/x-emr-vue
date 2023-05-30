<template>
  <el-collapse>
    <el-collapse-item title="查看代码">
      <div id="container" style="width: 100%; height: 100%; background-color:white; color: black;"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import axios from 'axios'//引入axios

export default {
  props: ['file'],
  mounted() {
    let container = document.getElementById('container')
    if(this.file){
      axios.get(this.file).then((result) => {
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