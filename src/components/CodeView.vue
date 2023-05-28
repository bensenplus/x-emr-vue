<template>
  <div id="container" style="width: 100%; height: 100%; color: #000;"></div>
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
            doc: result.data,
            extensions: [basicSetup, javascript()],
            parent: container
          })
      })
    }
  }
}
</script>