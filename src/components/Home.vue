<template>
     <lay-container>
     <lay-tab v-model="current">
          <lay-tab-item title="病案首页" id="1">
               <Editor id='doc1' doc="/doc/100.html"></Editor>
          </lay-tab-item>
          <lay-tab-item title="入院记录" id="2">
               <Editor id='doc2' doc="/doc/101.html"></Editor>
          </lay-tab-item>
          <lay-tab-item title="超声检查" id="3">
               <Editor id='doc3' doc="/doc/102.html"></Editor>
          </lay-tab-item>
     </lay-tab>
     </lay-container>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const current = ref("1")
    return {
      current
    }
  }
}
</script>